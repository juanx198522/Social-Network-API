// Import the necessary modules from the 'express' package
const router = require('express').Router();

// Import controller functions for user-related operations
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// Define routes for user-related operations
router.route('/').get(getAllUsers);
router.route('/').post(createUser);
router.route('/:userId').get(getUserById);
router.route('/:userId').put(updateUserById);
router.route('/:userId').delete(deleteUserById);
router.route('/:userId/friends/:friendId').post(addFriend);
router.route('/:userId/friends/:friendId').delete(removeFriend);

// Export the router to be used in other parts of the application
module.exports = router;