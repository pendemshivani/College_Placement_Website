// adminRoutes.js
const express = require('express');
const { createJob, sendNotification } = require('../controllers/adminController');
const { authenticate, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

// Admin-only routes
router.post('/create-job', authenticate, authorize(['admin']), createJob);
router.post('/send-notification', authenticate, authorize(['admin']), sendNotification);

module.exports = router;
