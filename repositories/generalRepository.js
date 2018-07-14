const dbConnection = require("../db/dbconnect");

function Repository() {
  this.connection = dbConnection.getConnection();
}

Repository.prototype.getAll = getAll;
Repository.prototype.getById = getById;
Repository.prototype.updateById = updateById;
Repository.prototype.deleteById = deleteById;

function getAll(callback) {
  this.collection.find({}, {projection:{ _id: 0 }}).toArray(callback);
}

function getById(id, callback) {
  this.collection.findOne({ id: id }, {projection:{ _id: 0 }}, (err, result) => {
    if (err) {
      return callback(err);
    }

    callback(err, result);
  });
}

function updateById(id, document, callback) {
  this.collection.update({id}, document, (err) => {
    if (err) {
      return callback(err);
    }

    this.collection.findOne({id}, {projection:{ _id: 0 }}, callback);
  });
}

function deleteById(id, callback) {
  this.collection.deleteOne({id}, (err) => {
    callback(err);
  });
}

module.exports = Repository;
