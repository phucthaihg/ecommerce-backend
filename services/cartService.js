const db = require('../models'); // Adjust path as necessary
const Product = db.Product;
const Cart = db.Cart;

exports.getCartItems = async (userId) => {
  return await Cart.findAll({
    where: { userId },
    include: [{ model: Product, as: 'product' }],
  });
};

exports.addToCart = async (userId, productId, quantity) => {
  const cartItem = await Cart.findOne({ where: { userId, productId } });
  if (cartItem) {
    cartItem.quantity += quantity;
    return await cartItem.save();
  } else {
    return await Cart.create({ userId, productId, quantity });
  }
};

exports.updateCartItem = async (userId, productId, quantity) => {
  const cartItem = await Cart.findOne({ where: { userId, productId } });
  if (!cartItem) {
    throw new Error('Cart item not found');
  }
  cartItem.quantity = quantity;
  return await cartItem.save();
};

exports.removeFromCart = async (userId, productId) => {
  const cartItem = await Cart.findOne({ where: { userId, productId } });
  if (!cartItem) {
    throw new Error('Cart item not found');
  }
  return await cartItem.destroy();
};
