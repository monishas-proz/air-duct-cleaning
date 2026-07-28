const { Category, CategoryImage } = require("../../models");

// Get Images by Category
const getCategoryImages = async (req, res) => {
  try {
    const { categoryId } = req.params;

    let where = {
      isDeleted: false,
    };

    // If a specific category is requested
    if (categoryId !== "all") {
      const category = await Category.findByPk(categoryId);

      if (!category || category.isDeleted) {
        return res.status(404).json({
          success: false,
          message: "Category not found.",
        });
      }

      where.categoryId = categoryId;
    }

    const images = await CategoryImage.findAll({
      where,
      order: [["createdAt", "ASC"]],
    });

    return res.status(200).json({
      success: true,
      images,
    });
  } catch (error) {
    console.error("Get Category Images Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

// Upload Image
const uploadCategoryImage = async (req, res) => {
  try {
    const { categoryId } = req.body;

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Image is required.",
      });
    }

    const category = await Category.findByPk(categoryId);

    if (!category || category.isDeleted) {
      return res.status(404).json({
        success: false,
        message: "Category not found.",
      });
    }

    const image = await CategoryImage.create({
      categoryId,
      image: req.file.filename,
    });

    return res.status(201).json({
      success: true,
      message: "Image uploaded successfully.",
      image,
    });
  } catch (error) {
    console.error("Upload Category Image Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

const deleteCategoryImage = async (req, res) => {
  try {
    const { id } = req.params;

    const image = await CategoryImage.findByPk(id);

    if (!image || image.isDeleted) {
      return res.status(404).json({
        success: false,
        message: "Image not found.",
      });
    }

    image.isDeleted = true;

    await image.save();

    res.json({
      success: true,
      message: "Image deleted successfully.",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to delete image.",
    });
  }
};

module.exports = {
  getCategoryImages,
  uploadCategoryImage,
  deleteCategoryImage
};