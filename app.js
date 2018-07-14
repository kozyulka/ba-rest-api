const express = require("express");
const bodyParser = require("body-parser");
const dbConnection = require('./db/dbconnect');

dbConnection.init(() => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    require("./routes/api/routes")(app);

    app.listen(8080);
});