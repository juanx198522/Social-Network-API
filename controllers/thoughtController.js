// Import necessary models and modules
const { Thought, User, Reaction } = require('../models'); 
const { Types } = require('mongoose'); 

// Controller object for handling various Thought-related actions
const ThoughtController = {
  // Get all thoughts from the database
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find({}); 
      res.json(thoughts); 
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Get a specific thought by its ID
  async getThoughtsById(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId }); 
      if (!thought) {
        res.status(404).json({ message: 'Thought not found' }); 
      } else {
        res.json(thought); 
      }
    } catch (err) {
      res.status(500).json(err); 
    }
  },

  // Create a new thought
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body); 
      res.status(201).json(thought); 
    } catch (err) {
      res.status(500).json(err); 
    }
  },

  // Delete a thought by its ID
  async deleteThought(req, res) {
    try {
      const thought = await Thought.findByIdAndDelete({ _id: req.params.thoughtId }); 
      res.status(200).json(thought); 
    } catch (err) {
      res.status(500).json(err); 
    }
  },

  // Update a thought by its ID
  async updateThoughtById(req, res) {
    try {
      const thought = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, {
        new: true,
      }); 
      if (!thought) {
        res.status(404).json({ message: 'Thought not found' }); 
      } else {
        res.json(thought); 
      }
    } catch (err) {
      res.status(500).json(err);
    }
  },

  // Create a new reaction for a specific thought
  async createReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      ); 
      thought ? res.json(thought) : res.status(404).json({ message: 'Not found' });
    } catch (e) {
      res.status(500).json(e); 
    }
  },

  // Delete a reaction from a specific thought
  async deleteReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      ); 
      thought ? res.json(thought) : res.status(404).json({ message: 'Not found' }); 
    } catch (e) {
      res.status(500).json(e); 
    }
  },
};

// Export the ThoughtController object to be used in other parts of the application
module.exports = ThoughtController;