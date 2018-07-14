const Repository = require("./generalRepository");

class MessageRepository extends Repository {
  constructor() {
    super();

    this.collection = this.connection.collection('messages');
  }

  findBySenderId(id, callback) {
    this.collection.find({ senderId: id }, { projection: { receiverId: 1, _id: 0 } }).toArray(callback);
  }

  create(document, callback) {
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
          senderId: document.senderId,
          receiverId: document.receiverId,
          messageBody: document.messageBody,
          id: document.id,
        };

        callback(null, result);
      });
    });
  }
}

module.exports = new MessageRepository();