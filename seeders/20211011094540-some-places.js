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
            "https://www.adequatetravel.com/blog/wp-content/uploads/2019/12/Bar-Oldenhof.png",
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
            "https://www.yourlittleblackbook.me/wp-content/uploads/2013/05/IMG_6102.jpg",
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
            "https://www.entreemagazine.nl/sites/default/files/styles/voorpagina-uitgelicht/public/afbeeldingen/stijl_en_design/Rosalia%20mvv%20Pim%20Ras%20%282%29_1.jpg?itok=3B-67qRc",
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
