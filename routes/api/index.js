// Import the necessary modules from the 'express' package, the userRoutes and the thoughtRoutes module
const router = require('express').Router();
const userRoutes = require('./userRoutes'); 
const thoughtRoutes = require('./thoughtRoutes'); 

// Use the userRoutes for '/user' paths
router.use('/user', userRoutes); 
// Use the thoughtRoutes for '/thought' paths
router.use('/thought', thoughtRoutes); 

// Export the router to be used in other parts of the application
module.exports = router;