const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload'); // multer middleware
const { uploadResume, getAllResumes, shortlistCandidate } = require('../controllers/resumeController');

// Student uploads resume
router.post('/upload', upload.single('resume'), uploadResume);

// Admin/company views all resumes
router.get('/', getAllResumes);

// Company shortlists student
router.post('/shortlist/:resumeId', shortlistCandidate);

module.exports = router;
