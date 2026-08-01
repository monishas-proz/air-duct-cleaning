const Category = require("./Category");
const CategoryImage = require("./CategoryImage");

// Associations
Category.hasMany(CategoryImage, {
  foreignKey: "categoryId",
  as: "images",
});

CategoryImage.belongsTo(Category, {
  foreignKey: "categoryId",
  as: "category",
});

module.exports = {
  Category,
  CategoryImage,
};