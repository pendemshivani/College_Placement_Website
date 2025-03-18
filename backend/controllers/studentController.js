const Resume = require('../models/Resume');

// Upload student resume
exports.uploadResume = async (req, res) => {
  try {
    const resume = new Resume({ userId: req.user.id, fileUrl: req.file.path });
    await resume.save();
    res.status(201).json({ message: 'Resume uploaded successfully', resumeUrl: resume.fileUrl });
  } catch (err) {
    res.status(500).json({ message: 'Error uploading resume', error: err });
  }
};
