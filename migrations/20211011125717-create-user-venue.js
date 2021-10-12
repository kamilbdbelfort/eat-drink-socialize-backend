// migrations/create-user-venue.js

"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("user_venues", {
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "users",
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
      like: {
        type: Sequelize.BOOLEAN,
      },
      saved: {
        type: Sequelize.BOOLEAN,
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
    await queryInterface.dropTable("user_venues");
  },
};
