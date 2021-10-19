// config/constants.js

require("dotenv").config();

module.exports = {
  SALT_ROUNDS: parseInt(process.env.SALT_ROUNDS) || 10,
  PORT: process.env.PORT || 4000,
};
