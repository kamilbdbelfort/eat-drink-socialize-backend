// migrations/create-tag-venue.js

"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("tag_venues", {
      tagId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "tags",
          key: "id",
        },
      },
      venueId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "venues",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("tag_venues");
  },
};
