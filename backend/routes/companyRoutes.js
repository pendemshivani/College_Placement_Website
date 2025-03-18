const express = require('express');
const {
  browseResumes,
  shortlistCandidate,
  postJob,
} = require('../controllers/companyController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

const router = express.Router();

// Browse resumes (accessible only to companies)
router.get('/browse-resumes', authMiddleware, roleMiddleware(['company']), browseResumes);

// Shortlist a candidate (accessible only to companies)
router.post('/shortlist/:resumeId', authMiddleware, roleMiddleware(['company']), shortlistCandidate);

// Post a job announcement (accessible only to companies)
router.post('/post-job', authMiddleware, roleMiddleware(['company']), postJob);

module.exports = router;