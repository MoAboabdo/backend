const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

const protect = require('../middleware/authMiddleware.js');

router.post('/', userController.registerUser);
router.post('/login', userController.authUser);

router.get('/profile', protect, userController.getUserProfile);
router.put('/profile', protect, userController.updateUserProfile);

module.exports = router;
