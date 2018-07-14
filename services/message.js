const MessageRepository = require("../repositories/MessageRepository");

module.exports = {
    findAll: callback => {
        MessageRepository.getAll(callback);
    },

    findOne: (id, callback) => {
        MessageRepository.getById(id, callback);
    },

    create: (document, callback) => {
        MessageRepository.create(document, callback);
    },

    update: (id, document, callback) => {
        MessageRepository.updateById(id, document, callback);
    },

    deleteOne: (id, callback) => {
        MessageRepository.deleteById(id, callback)
    }
};
