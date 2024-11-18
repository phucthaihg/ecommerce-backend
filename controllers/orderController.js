const orderService = require('../services/orderService');

exports.createOrder = async (req, res) => {
  try {
    const { userId, items, totalAmount } = req.body;
    const order = await orderService.createOrder(userId, items, totalAmount);
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create order' });
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await orderService.getOrderById(id);
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch order' });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await orderService.getAllOrders();
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch orders' });
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updatedOrder = await orderService.updateOrder(id, status);
    res.json(updatedOrder);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update order' });
  }
};  

exports.getOrdersByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const orders = await orderService.getOrdersByUserId(userId);
    res.json(orders);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch orders by user' });
  }
};