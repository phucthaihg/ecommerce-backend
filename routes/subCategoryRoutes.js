const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/authMiddleware');
const {
  getAllSubCategories,
  getSubCategoryById,
  createSubCategory,
  updateSubCategory,
  deleteSubCategory,
} = require('../controllers/subCategoryController');

router.get('/', getAllSubCategories);
router.get('/:id', getSubCategoryById);
router.post('/', verifyToken, createSubCategory);
router.put('/:id', verifyToken, updateSubCategory);
router.delete('/:id', verifyToken, deleteSubCategory);

module.exports = router;
