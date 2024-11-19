const db = require('../models'); // Adjust path as necessary
const Order = db.Order;
const OrderDetails = db.OrderDetails;

exports.createOrder = async (userId, items, totalAmount) => {
  const order = await Order.create({ userId, totalAmount });
  const orderDetailsData = items.map(item => ({
    orderId: order.id,
    productId: item.productId,
    quantity: item.quantity,
    price: item.price,
  }));
  await OrderDetails.bulkCreate(orderDetailsData);
  return order;
};

exports.getOrderById = async (id) => {
  return await Order.findByPk(id, {
    include: [{ model: OrderDetails, as: 'orderDetails' }],
  });
};

exports.getAllOrders = async () => {
  return await Order.findAll({
    include: [{ model: OrderDetails, as: 'orderDetails' }],
  });
};

exports.updateOrder = async (id, status) => {
  return await Order.update({ status }, { where: { id } });
};

exports.getOrdersByUserId = async (userId) => {
  return await Order.findAll({ where: { userId } });
};