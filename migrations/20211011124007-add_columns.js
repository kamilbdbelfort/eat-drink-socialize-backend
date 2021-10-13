// migrations/add-columns.js

"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("reviews", "userId", {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
      }),
      queryInterface.addColumn("reviews", "placeId", {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "places",
          key: "id",
        },
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("reviews", "userId"),
      queryInterface.removeColumn("reviews", "placeId"),
    ]);
  },
};
