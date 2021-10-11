"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          email: "kamil@kamil",
          password: bcrypt.hashSync("kamil", SALT_ROUNDS),
          name: "Kamil Beeli de Belfort",
          birthday: "1989-03-09",
          street: "Oostelijke Handelskade",
          number: 39,
          city: "Amsterdam",
          postcode: "1019BW",
          country: "Netherlands",
          image:
            "https://media-exp1.licdn.com/dms/image/C4E03AQEtUtQ9T6UECw/profile-displayphoto-shrink_800_800/0/1615834281886?e=1639612800&v=beta&t=oi-toiEOpqy3lRkl5TOsSwPRa_ORuWzYPf4Tx8lCPFY",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
