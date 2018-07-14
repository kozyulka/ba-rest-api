const dbConnection = require("../db/dbconnect");

class Repository {
  constructor() {
    this.connection = dbConnection.getConnection();
  }

  getAll(callback) {
    this.collection.find({}, {projection:{ _id: 0 }}).toArray(callback);
  }

  getById(id, callback) {
    this.collection.findOne({ id: id }, {projection:{ _id: 0 }}, (err, result) => {
      if (err) {
        return callback(err);
      }

      callback(err, result);
    });
  }

  updateById(id, document, callback) {
    this.collection.update({id}, document, (err) => {
      if (err) {
        return callback(err);
      }

      this.collection.findOne({id}, {projection:{ _id: 0 }}, callback);
    });
  }

  deleteById(id, callback) {
    this.collection.deleteOne({id}, (err) => {
      callback(err);
    });
  }
}

module.exports = Repository;
