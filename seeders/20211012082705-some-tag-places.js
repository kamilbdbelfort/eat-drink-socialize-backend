// seeders/some-tag-places.js

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "tag_places",
      [
        {
          tagId: 1,
          placeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 2,
          placeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 3,
          placeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 4,
          placeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 5,
          placeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 1,
          placeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 1,
          placeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 5,
          placeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 5,
          placeId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("tag_places", null, {});
  },
};
