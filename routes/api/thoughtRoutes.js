// Import the necessary modules from the 'express' package
const router = require('express').Router();

// Import controller functions for thought-related operations
const {
    getAllThoughts,
    getThoughtsById,
    createThought,
    deleteThought,
    updateThoughtById,
    createReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');

// Define routes for thought-related operations
router.route('/').get(getAllThoughts);
router.route('/').post(createThought);
router.route('/:thoughtId').get(getThoughtsById);
router.route('/:thoughtId').put(updateThoughtById);
router.route('/:thoughtId').delete(deleteThought);
router.route('/:thoughtId/reactions').post(createReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

// Export the router to be used in other parts of the application
module.exports = router;