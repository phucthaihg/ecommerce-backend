const { Category } = require('../models/category.js');

exports.getAllCategories = async () => {
  return await Category.findAll();
};

exports.getCategoryById = async (id) => {
  return await Category.findByPk(id);
};

exports.createCategory = async (name, description) => {
  return await Category.create({ name, description });
};

exports.updateCategory = async (id, name, description) => {
  const category = await Category.findByPk(id);
  if (!category) {
    throw new Error('Category not found');
  }
  return await category.update({ name, description });
};

exports.deleteCategory = async (id) => {
  const category = await Category.findByPk(id);
  if (!category) {
    throw new Error('Category not found');
  }
  return await category.destroy();
};
