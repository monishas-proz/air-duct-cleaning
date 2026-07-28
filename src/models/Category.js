const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");


const Category = sequelize.define(
  "Category",
  {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: "Category name is required",
        },
        len: {
          args: [2, 100],
          msg: "Category name must be between 2 and 100 characters",
        },
      },
    },

    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    tableName: "categories",
    timestamps: true,
  }
);

module.exports = Category;