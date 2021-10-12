// seeders/some-tag-venues.js

"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "tag_venues",
      [
        {
          tagId: 1,
          venueId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 2,
          venueId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 3,
          venueId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 4,
          venueId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 5,
          venueId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 1,
          venueId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 1,
          venueId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 5,
          venueId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          tagId: 5,
          venueId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("tag_venues", null, {});
  },
};
