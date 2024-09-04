const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const orderRoutes = require('./routes/order');

dotenv.config();
const app = express();
app.use(express.json());
// MongoDB Config
mongoose.connect(process.env.MONGO_URL, {})
    // Routing Config
    .then(() => {
        console.log("Database connected");
        app.use('/api', orderRoutes);
        // Server Running
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () =>
            console.log('Server running on port 3000'));
    })
    .catch((err) => console.error(err.message));