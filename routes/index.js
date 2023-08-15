// Import the necessary modules from the 'express' package and the apiRoutes module
const router = require('express').Router();
const apiRoutes = require('./api'); // Import routes for API endpoints

// Use the apiRoutes for '/api' paths
router.use('/api', apiRoutes); 

// Catch-all route for handling undefined paths
router.use((req, res) => {
    return res.status(404).send('Not found');
});

// Export the router to be used in other parts of the application
module.exports = router;