const express = require('express');
const { createJob, sendNotification } = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const router = express.Router();

router.post('/create-job', authMiddleware, roleMiddleware(['admin']), createJob);
router.post('/send-notification', authMiddleware, roleMiddleware(['admin']), sendNotification);

module.exports = router;
