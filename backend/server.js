const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb+srv://bhusal99:Aspirem5@ecommerce.v9prnwk.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.on('error', err => {
    console.error('MongoDB connection error:', err);
});

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
});
// Routes
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
