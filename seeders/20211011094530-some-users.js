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
          city: "Amsterdam",
          country: "Netherlands",
          image:
            "https://res.cloudinary.com/ddng6db9v/image/upload/v1635371287/kamil_xmdhmf.jpg",
          instagram: "https://www.instagram.com/kamil_beelidebelfort/",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "test@test.com",
          password: bcrypt.hashSync("test", SALT_ROUNDS),
          name: "Test Buddy",
          birthday: "2000-01-01",
          city: "Testhoven",
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
