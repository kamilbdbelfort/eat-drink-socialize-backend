// seeders/some-places.js

"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "places",
      [
        {
          name: "Bar Oldenhof",
          street: "Elandsgracht",
          number: 84,
          city: "Amsterdam",
          postcode: "1016TZ",
          country: "Netherlands",
          image:
            "https://res.cloudinary.com/ddng6db9v/image/upload/v1635371288/Bar-Oldenhof_ppnrhy.png",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tales & Spirits",
          street: "Lijnbaanssteeg",
          number: 5,
          city: "Amsterdam",
          postcode: "1012TE",
          country: "Netherlands",
          image:
            "https://res.cloudinary.com/ddng6db9v/image/upload/v1635371288/tales_spirits_e1q0f1.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rosalia's Menagerie",
          street: "Kloveniersburgwal",
          number: 20,
          city: "Amsterdam",
          postcode: "1012CV",
          country: "Netherlands",
          image:
            "https://res.cloudinary.com/ddng6db9v/image/upload/v1635371288/Rosalia_mvv_Pim_Ras_2__1_az6npg.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bar TwentySeven",
          street: "Dam",
          number: 27,
          city: "Amsterdam",
          postcode: "1012JS",
          country: "Netherlands",
          image:
            "https://res.cloudinary.com/ddng6db9v/image/upload/v1635371288/twentyseven_cbexcs.jpg",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("places", null, {});
  },
};
