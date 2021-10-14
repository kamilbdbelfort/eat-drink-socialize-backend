// seeders/some-users.js

"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          email: "kamil@kamil.com",
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
          instagram: "https://www.instagram.com/kamil_beelidebelfort/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "test@test.com",
          password: bcrypt.hashSync("test", SALT_ROUNDS),
          name: "Test Buddy",
          birthday: "2000-01-01",
          street: "Teststraat",
          number: 101,
          city: "Testhoven",
          postcode: "9999TS",
          country: "Testland",
          image: "",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
