// Import necessary modules from the 'mongoose' package
const { Schema, model, Types } = require('mongoose');

// Define the user schema for MongoDB documents
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true, 
      trim: true,   
    },
    email: {
      type: String,
      required: true,
      unique: true, 
      validate: {
        
        validator: function (v) {
          return /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(v);
        }
      }
    },
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User', 
      }
    ],
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought', 
      }
    ],
  },
  {
    // Configuration options for the schema
    toJSON: {
      virtuals: true, 
    },
    id: false, 
  }
);

// Define a virtual property 'friendCount' that calculates the number of friends for a user
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// Create a 'User' model based on the userSchema
const User = model('User', userSchema);

// Export the 'User' model for use in other parts of the application
module.exports = User;