"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_venue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user_venue.init(
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      venueId: { type: DataTypes.INTEGER, allowNull: false },
      like: DataTypes.BOOLEAN,
      saved: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "user_venue",
    }
  );
  return user_venue;
};
