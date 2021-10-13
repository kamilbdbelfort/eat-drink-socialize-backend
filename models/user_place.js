// models/user_place.js

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user_place extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user_place.belongsTo(models.user);
      user_place.belongsTo(models.place);
    }
  }
  user_place.init(
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      placeId: { type: DataTypes.INTEGER, allowNull: false },
      like: { type: DataTypes.BOOLEAN, allowNull: true },
      saved: { type: DataTypes.BOOLEAN, allowNull: true },
    },
    {
      sequelize,
      modelName: "user_place",
    }
  );
  return user_place;
};
