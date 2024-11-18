const subCategoryService = require('../services/subCategoryService');

exports.getAllSubCategories = async (req, res) => {
  try {
    const subCategories = await subCategoryService.getAllSubCategories();
    res.json(subCategories);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch subcategories' });
  }
};

exports.getSubCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const subCategory = await subCategoryService.getSubCategoryById(id);
    if (!subCategory) {
      return res.status(404).json({ error: 'SubCategory not found' });
    }
    res.json(subCategory);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch subcategory' });
  }
};

exports.createSubCategory = async (req, res) => {
  try {
    const { name, description, categoryId } = req.body;
    const subCategory = await subCategoryService.createSubCategory(name, description, categoryId);
    res.status(201).json(subCategory);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create subcategory' });
  }
};

exports.updateSubCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, categoryId } = req.body;
    const subCategory = await subCategoryService.updateSubCategory(id, name, description, categoryId);
    res.json(subCategory);
  } catch (error) {
    res.status(500).json({ error: error.message || 'Failed to update subcategory' });
  }
};

exports.deleteSubCategory = async (req, res) => {
  try {
    const { id } = req.params;
    await subCategoryService.deleteSubCategory(id);
    res.json({ message: 'SubCategory deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message || 'Failed to delete subcategory' });
  }
};
