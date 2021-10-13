// seeders/some-user-places.js

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "user_places",
      [
        {
          userId: 1,
          placeId: 1,
          like: true,
          saved: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          placeId: 2,
          like: true,
          saved: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          placeId: 3,
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
    await queryInterface.bulkDelete("user_places", null, {});
  },
};
