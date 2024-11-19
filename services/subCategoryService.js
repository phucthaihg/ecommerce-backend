const db = require('../models'); // Adjust path as necessary
const SubCategory = db.SubCategories;

exports.getAllSubCategories = async () => {
  return await SubCategory.findAll();
};

exports.getSubCategoryById = async (id) => {
  return await SubCategory.findByPk(id);
};

exports.createSubCategory = async (name, description, categoryId) => {
  return await SubCategory.create({ name, description, categoryId });
};

exports.updateSubCategory = async (id, name, description, categoryId) => {
  const subCategory = await SubCategory.findByPk(id);
  if (!subCategory) {
    throw new Error('SubCategory not found');
  }
  return await subCategory.update({ name, description, categoryId });
};

exports.deleteSubCategory = async (id) => {
  const subCategory = await SubCategory.findByPk(id);
  if (!subCategory) {
    throw new Error('SubCategory not found');
  }
  return await subCategory.destroy();
};
