// models/tag_venue.js

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class tag_venue extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tag_venue.belongsTo(models.tag);
      tag_venue.belongsTo(models.venue);
    }
  }
  tag_venue.init(
    {
      tagId: { type: DataTypes.INTEGER, allowNull: false },
      venueId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "tag_venue",
    }
  );
  return tag_venue;
};
