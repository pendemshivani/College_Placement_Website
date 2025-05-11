const express = require('express');
const { 
  getCompanyResumes, 
  shortlistCandidate,
  postJob
} = require('../controllers/companyController');
const { authenticate, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

// Get resumes for companies
router.get('/resumes', 
  authenticate,
  authorize(['company']),
  getCompanyResumes
);

// Shortlist candidate
router.post('/shortlist/:id', 
  authenticate,
  authorize(['company']),
  shortlistCandidate
);

// Post job
router.post('/jobs',
  authenticate,
  authorize(['company']),
  postJob
);

module.exports = router;