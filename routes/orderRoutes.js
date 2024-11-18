const express = require('express');
const router = express.Router();
const { createOrder, getOrderById, getAllOrders, updateOrder, getOrdersByUserId } = require('../controllers/orderController');

router.post('/', createOrder);
router.get('/:id', getOrderById);
router.get('/', getAllOrders);
router.put('/:id', updateOrder);
router.get('/user/:userId', getOrdersByUserId);

module.exports = router;
