const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const CategoryImage = sequelize.define(
  "CategoryImage",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    image: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    tableName: "category_images",
    timestamps: true,
  }
);

module.exports = CategoryImage;