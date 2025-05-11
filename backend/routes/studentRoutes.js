const express = require('express');
const { uploadResume, getResumes } = require('../controllers/studentController');
const { authenticate, authorize } = require('../middleware/authMiddleware');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const router = express.Router();

// Configure Multer Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, '../uploads/resumes');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, `${req.user.id}-${uniqueSuffix}${path.extname(file.originalname)}`);
  }
});

// File Filter & Limits
const upload = multer({ 
  storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Only PDF and Word documents are allowed'), false);
    }
  },
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB
  }
});

// Route to upload resume (student)
router.post(
  '/upload-resume',
  authenticate,
  authorize(['student']),
  upload.single('resume'),
  uploadResume
);

// Route to get all resumes (admin & company)
router.get(
  '/resumes',
  authenticate,
  authorize(['admin', 'company']),
  getResumes
);

module.exports = router;
