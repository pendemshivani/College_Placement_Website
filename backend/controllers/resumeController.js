// controllers/resumeController.js
const Resume = require('../models/Resume');
const Notification = require('../models/Notification');

exports.getCompanyResumes = async (req, res) => {
  try {
    const resumes = await Resume.find({})
      .populate('student', 'name email branch') // populate student info
      .select('filename originalName student shortlisted uploadedAt') // select required fields
      .sort({ uploadedAt: -1 });

    const resumesWithUrls = resumes.map(resume => ({
      _id: resume._id,
      student: resume.student,
      filename: resume.filename,
      originalName: resume.originalName,
      url: `/uploads/resumes/${resume.filename}`,
      shortlisted: resume.shortlisted,
      uploadedAt: resume.uploadedAt
    }));

    res.status(200).json(resumesWithUrls);
  } catch (error) {
    res.status(500).json({ 
      error: 'Error fetching resumes',
      details: error.message 
    });
  }
};
