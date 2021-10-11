"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "venues",
      [
        {
          name: "Bar Oldenhof",
          street: "Elandsgracht",
          number: 84,
          city: "Amsterdam",
          postcode: "1016TZ",
          country: "Netherlands",
          image:
            "https://www.adequatetravel.com/blog/wp-content/uploads/2019/12/Bar-Oldenhof.png",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("venues", null, {});
  },
};
