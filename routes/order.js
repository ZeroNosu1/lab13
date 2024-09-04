const express = require("express");
const router = express.Router();
const Order = require('../models/order');
// Import Controller
const { getOrders, getOrder, createOrder, updateOrder, deleteOrder } = require('../controllers/orderController');
// APIs Routing Config
router.get('/orders', getOrders);
router.get('/order/:id', getOrder);
router.post('/order', createOrder);
router.put('/order/:id', updateOrder);
router.delete('/order/:id', deleteOrder);
// Export router
module.exports = router;