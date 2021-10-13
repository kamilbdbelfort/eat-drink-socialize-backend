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
          image:
            "https://www.mywanderlustylife.com/wp-content/uploads/2017/05/3-days-in-amsterdam-bar-oldenhof-exterior-.jpg",
          rating: 5,
          userId: 1,
          placeId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Cool place!",
          comment:
            "Very friendly staff with funky & hipster style! Casual, loud and fun place.",
          image:
            "https://media.iamsterdam.com/ff/api/assets/5ff88a17de7e8633a4aac132/94e5346c-ae52-4373-8398-ca0bfafde548.jpg",
          rating: 5,
          userId: 2,
          placeId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Luxurious!",
          comment:
            "Beautiful bar and interior. Interesting drinks and great location.",
          image:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/0d46b3a9f11326b46797136696093809.jpg?crop=0.941xw:1.00xh;0.0309xw,0&resize=640:*",
          rating: 5,
          userId: 1,
          placeId: 2,
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
