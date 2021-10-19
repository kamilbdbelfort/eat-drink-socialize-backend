require("dotenv").config();

module.exports = {
  development: {
    username: "postgres",
    password: "secret",
    url: process.env.API_URL,
    host: "localhost",
    dialect: "postgres",
    operatorsAliases: "0",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: "0",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: "0",
  },
};
