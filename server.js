// Import the 'express' package, the database connection and the routes module
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes'); 

// Define the port number to listen on port 3001
const PORT = process.env.PORT || 3001;

// Create an instance of the Express application
const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use the imported routes for handling API requests
app.use(routes);

// Start the Express server and listen on the specified port
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});