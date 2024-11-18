const express = require('express');
const router = express.Router();
const {
  getCartItems,
  addToCart,
  updateCartItem,
  removeFromCart,
} = require('../controllers/cartController');

router.get('/:userId', getCartItems);
router.post('/add', addToCart);
router.put('/update', updateCartItem);
router.delete('/remove', removeFromCart);

module.exports = router;
