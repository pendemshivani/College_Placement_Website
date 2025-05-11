const express = require('express');
const { register, login, getUserInfo } = require('../controllers/authController');
const { authenticate } = require('../middleware/authMiddleware'); // Fixed import

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/users/me', authenticate, getUserInfo);

module.exports = router;