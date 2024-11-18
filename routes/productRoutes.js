const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/authMiddleware');
const {
  getAllProducts,
  getProductById,
  getProductsBySubCategoryId,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productController');


router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.get('/subcategory/:subCategoryId', getProductsBySubCategoryId);
router.post('/', verifyToken, createProduct);
router.put('/:id', verifyToken, updateProduct);
router.delete('/:id', verifyToken, deleteProduct);

module.exports = router;
