const { Product } = require('../models/product.js');

exports.getAllProducts = async () => {
  console.log('productService.getAllProducts')
  return await Product.findAll();
};

exports.getProductById = async (id) => {
  return await Product.findByPk(id);
};

exports.getProductsBySubCategoryId = async (subCategoryId) => await Product.findAll({ where: { subCategoryId } });

exports.createProduct = async (name, description, price, stock, subCategoryId) => {
  return await Product.create({ name, description, price, stock, subCategoryId });
};

exports.updateProduct = async (id, name, description, price, stock) => {
  const product = await Product.findByPk(id);
  if (!product) {
    throw new Error('Product not found');
  }
  return await product.update({ name, description, price, stock });
};

exports.deleteProduct = async (id) => {
  const product = await Product.findByPk(id);
  if (!product) {
    throw new Error('Product not found');
  }
  return await product.destroy();
};
