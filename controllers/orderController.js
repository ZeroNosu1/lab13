// Import Model
const Order = require('../models/order');
const express = require('express');
// Function add and export
exports.createOrder = async (req, res) => {
    const { customer_name, product, quantity, order_date, status } = req.body;
    const order = new Order({
        customer_name, product, quantity, order_date, status
    });
    try {
        const newOrder = await order.save();
        res.status(201).json(new Order);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
// Function update and export
exports.updateOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const updateOrder = await Order.findByIdAndUpdate(id, req.body, { new: true });
        if (!updateOrder) return res.status(404).json({ message: 'Order not found' });
        res.status(200).json(UpdateOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
// Function delete and export
exports.deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteOrder = await Order.findByIdAndDelete(id);
        if (!deleteOrder) return res.status(404).json({ message: 'Order not found' });
        res.status(200).json({ message: 'Order delete successfully' });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
// Function get all data and export
exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
// Function get data by genre and export
exports.getOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findById(id);
        if (!order) return res.status(404).json({ message: 'Order not found' });
        res.json(order);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};