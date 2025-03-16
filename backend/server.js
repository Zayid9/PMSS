const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// Initialize the Express application
const app = express();

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

// Define a port for the server to listen on
const PORT = process.env.PORT || 30000;

// Connect to MongoDB
connectDB();

// Use the user routes
app.use('/api/users', require('./routes/userOnlyAdmin'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});