// models/tag_place.js

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tag_place extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tag_place.belongsTo(models.tag);
      tag_place.belongsTo(models.place);
    }
  }
  tag_place.init(
    {
      tagId: { type: DataTypes.INTEGER, allowNull: false },
      placeId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "tag_place",
    }
  );
  return tag_place;
};
