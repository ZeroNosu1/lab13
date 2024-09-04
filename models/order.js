const mongoose = require('mongoose');

// Define Schame wit timestamps and disable versionKey
const orderSchema = new mongoose.Schema({
    customer_name: { type: String, required: true },
    product: { type: String, required: true },
    quantity: { type: Number, required: true },
    order_date: { type: String, required: true },
    status: { type: String, required: true },
});
// Define Model
const Order = mongoose.model('Order', orderSchema);

// Export Model
module.exports = Order;