// routes/resumeRoutes.js
const express = require('express');
const router = express.Router();
const { getCompanyResumes } = require('../controllers/resumeController'); // ✅ Correct import
const { authenticate } = require('../middleware/authMiddleware');

// ✅ Route to get all resumes (for admin or company)
router.get('/all', authenticate, getCompanyResumes);

module.exports = router;
