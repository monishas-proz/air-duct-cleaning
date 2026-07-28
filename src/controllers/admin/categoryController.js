const {Category} = require("../../models");

// Get All Categories
const getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll({
        where: {
            isDeleted: false,
        },
        order: [["createdAt", "ASC"]],
    });

    return res.status(200).json({
      success: true,
      categories,
    });
  } catch (error) {
    console.error("Get Categories Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

//Get Category By ID

const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await Category.findOne({
      where: {
        id,
        isDeleted: false,
      },
    });

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found.",
      });
    }

    return res.status(200).json({
      success: true,
      category,
    });
  } catch (error) {
    console.error("Get Category By ID Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

// Create Category
const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const categoryName = name?.trim();

    if (!categoryName) {
      return res.status(400).json({
        success: false,
        message: "Category name is required.",
      });
    }

    const existingCategory = await Category.findOne({
      where: {
        name: categoryName,
      },
    });

    if (existingCategory) {
      return res.status(409).json({
        success: false,
        message: "Category already exists.",
      });
    }

    const category = await Category.create({
      name: categoryName,
    });

    return res.status(201).json({
      success: true,
      message: "Category created successfully.",
      category,
    });
  } catch (error) {
    console.error("Create Category Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

// Update Category
const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const categoryName = name?.trim();

    if (!categoryName) {
      return res.status(400).json({
        success: false,
        message: "Category name is required.",
      });
    }

    const category = await Category.findOne({
      where: {
        id,
        isDeleted: false,
      },
    });

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found.",
      });
    }

    const existingCategory = await Category.findOne({
      where: {
        name: categoryName,
      },
    });

    if (existingCategory && existingCategory.id !== category.id) {
      return res.status(409).json({
        success: false,
        message: "Category already exists.",
      });
    }

    category.name = categoryName;

    await category.save();

    return res.status(200).json({
      success: true,
      message: "Category updated successfully.",
      category,
    });
  } catch (error) {
    console.error("Update Category Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

// Soft Delete Category
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await Category.findOne({
      where: {
        id,
        isDeleted: false,
      },
    });

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found.",
      });
    }

    category.isDeleted = true;

    await category.save();

    return res.status(200).json({
      success: true,
      message: "Category deleted successfully.",
    });
  } catch (error) {
    console.error("Delete Category Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

module.exports = {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory
};