// Import necessary modules from the 'mongoose' package and the reactionSchema from the specified file
const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Define the thought schema for MongoDB documents
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => new Date(timestamp).toLocaleString(),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema],
    },
    {
        // Configuration options for the schema
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
);

// Define a virtual property 'reactionCount' that calculates the number of reactions for a thought
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

// Create a 'Thought' model based on the thoughtSchema
const Thought = model('Thought', thoughtSchema);

// Export the 'Thought' model for use in other parts of the application
module.exports = Thought;