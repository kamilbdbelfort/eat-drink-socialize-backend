// seeders/some-user-venues.js

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "user_venues",
      [
        {
          userId: 1,
          venueId: 1,
          like: true,
          saved: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          venueId: 2,
          like: true,
          saved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          venueId: 3,
          like: true,
          saved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("user_venues", null, {});
  },
};
