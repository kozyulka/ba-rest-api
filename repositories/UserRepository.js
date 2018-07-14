const Repository = require("./generalRepository");

function UserRepository() {
    Repository.prototype.constructor.call(this);

    this.collection = this.connection.collection('users');
}

UserRepository.prototype = new Repository();

UserRepository.prototype.findByIds = findByIds;
UserRepository.prototype.create = create;

function findByIds (ids, callback) {
    this.collection.find({id: {$in: ids}}, {projection:{ _id: 0 }}).toArray(callback);
}

function create(document, callback) {
    this.collection.countDocuments((err, count) => {
      if (err) {
        return callback(err);
      }

      const id = count + 1;

      document.id = id;

      this.collection.insert(document, (err) => {
        if (err) {
          return callback(err);
        }

        const result = {
          firstName: document.firstName,
          lastName: document.lastName,
          email: document.email,
          country: document.country,
          id: document.id,
        };

        callback(null, result);
      });
    });
  }

module.exports = new UserRepository();