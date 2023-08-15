// Import necessary modules from the 'mongoose' package
const { Schema, Types } = require('mongoose');

// Define the reaction schema for MongoDB documents
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => new Date(timestamp).toLocaleDateString()
    },
  },
  {
    // Configuration options for the schema
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// Export the reaction schema for use in other parts of the application
module.exports = reactionSchema;