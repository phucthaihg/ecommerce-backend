const productService = require('../services/productService');

exports.getAllProducts = async (req, res) => {
  try {
    console.log('productController.getAllProducts');
    const products = await productService.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productService.getProductById(id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch product' });
  }
};

exports.getProductsBySubCategoryId = async (req, res) => {
  try {
    const { subCategoryId } = req.params;
    const products = await productService.getProductsBySubCategoryId(subCategoryId);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products by subcategory' });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { name, description, price, stock, subCategoryId } = req.body;
    const product = await productService.createProduct(name, description, price, stock, subCategoryId);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create product' });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, stock } = req.body;
    const product = await productService.updateProduct(id, name, description, price, stock);
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message || 'Failed to update product' });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await productService.deleteProduct(id);
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message || 'Failed to delete product' });
  }
};
