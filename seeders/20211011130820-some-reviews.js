// seeders/some-reviews.js

"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "reviews",
      [
        {
          title: "I loved it",
          comment:
            "Great service, atmosphere and drinks. Very classy decor, jazzy music in the background, place to be!",
          image: 84,
          rating: 5,
          userId: 1,
          venueId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("reviews", null, {});
  },
};
