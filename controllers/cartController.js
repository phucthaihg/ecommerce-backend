const cartService = require('../services/cartService');

exports.getCartItems = async (req, res) => {
  try {
    const { userId } = req.params;
    const cartItems = await cartService.getCartItems(userId);
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch cart items' });
  }
};

exports.addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    const cartItem = await cartService.addToCart(userId, productId, quantity);
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add item to cart' });
  }
};

exports.updateCartItem = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    const cartItem = await cartService.updateCartItem(userId, productId, quantity);
    res.json(cartItem);
  } catch (error) {
    res.status(500).json({ error: error.message || 'Failed to update cart item' });
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    await cartService.removeFromCart(userId, productId);
    res.json({ message: 'Item removed from cart' });
  } catch (error) {
    res.status(500).json({ error: error.message || 'Failed to remove item from cart' });
  }
};
