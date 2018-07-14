const config = require("../config/index");
const mongoClient = require('mongodb').MongoClient;

let connection;

const init = (callback) => {
    mongoClient.connect(config.uri, (err, client) => {
        connection = client.db(config.dbname);

        callback();
    });
};

const getConnection = () => {
    return connection;
}

module.exports = {
    init: init,
    getConnection: getConnection
};