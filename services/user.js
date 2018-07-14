const UserRepository = require("../repositories/UserRepository");
const MessageRepository = require("../repositories/MessageRepository");

module.exports = {
    findAll: callback => {
        UserRepository.getAll(callback);
    },

    findOne: (id, callback) => {
        UserRepository.getById(id, callback);
    },

    findReceivers: (id, callback) => {
        MessageRepository.findBySenderId(id, (err, data) => {
            if (err) {
                return callback(err);
            }

            const ids = data.map((item) => item.receiverId);

            UserRepository.findByIds(ids, callback);
        });
    },

    create: (document, callback) => {
        UserRepository.create(document, callback);
    },

    update: (id, document, callback) => {
        UserRepository.updateById(id, document, callback);
    },

    deleteOne: (id, callback) => {
        UserRepository.deleteById(id, callback);
    }
};
