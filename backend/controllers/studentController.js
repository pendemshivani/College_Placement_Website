const Resume = require('../models/Resume');

// Upload Resume
const uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'Please upload a resume file' });
    }

    const resume = new Resume({
      student: req.user.id,
      resumeUrl: `/uploads/resumes/${req.file.filename}`,
    });

    await resume.save();
    res.status(201).json({ message: 'Resume uploaded successfully', resume });
  } catch (err) {
    res.status(500).json({ message: 'Resume uploaded successfully', error: err.message });
  }
};

// Get All Resumes (for admin or company)
const getResumes = async (req, res) => {
  try {
    const resumes = await Resume.find().populate('student', 'name email');
    res.status(200).json({ resumes });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports = {
  uploadResume,
  getResumes
};
