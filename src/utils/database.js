const sequelize = require("sequelize");

const db = new sequelize ({
    database: "todo_crud",
    port: 5433,
    host: "localhost",
    username: "postgres",
    password: "230516",
    dialect: "postgres"

});

module.exports = db;