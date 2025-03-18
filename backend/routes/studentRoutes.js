const express = require('express');
const { uploadResume } = require('../controllers/studentController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const router = express.Router();

router.post('/upload', authMiddleware, roleMiddleware(['student']), uploadResume);

module.exports = router;
