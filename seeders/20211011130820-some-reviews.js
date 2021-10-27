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
            "https://res.cloudinary.com/ddng6db9v/image/upload/v1635371512/3-days-in-amsterdam-bar-oldenhof-exterior-_s1v95t.jpg",
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
            "https://res.cloudinary.com/ddng6db9v/image/upload/v1635371506/tales-review1_cdsey0.jpg",
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
            "https://res.cloudinary.com/ddng6db9v/image/upload/v1635371512/27-review_wvpora.jpg",
          rating: 5,
          userId: 1,
          placeId: 4,
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
