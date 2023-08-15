// Import the necessary modules from the 'mongoose' package
const { connect, connection } = require('mongoose');

// Define the MongoDB connection string. If 'MONGODB_URI' environment variable is set, use it; otherwise, use the default local connection.
const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/studentsDB';

// Establish a connection to the MongoDB database using the provided connection string
connect(connectionString);

// Export the 'connection' object from this module, which represents the MongoDB database connection
module.exports = connection;