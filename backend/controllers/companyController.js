const Resume = require('../models/Resume');
const Notification = require('../models/Notification');
const Job = require('../models/Job');

// Get resumes for companies (renamed from browseResumes)
const getCompanyResumes = async (req, res) => {
  try {
    const resumes = await Resume.find({ shortlisted: false })
      .populate('student', 'name email branch')
      .select('filename originalName student shortlisted uploadedAt');

    const resumesWithUrls = resumes.map(resume => ({
      ...resume.toObject(),
      url: `/uploads/resumes/${resume.filename}`,
      student: resume.student
    }));

    res.status(200).json(resumesWithUrls);
  } catch (err) {
    res.status(500).json({ 
      message: 'Error fetching resumes', 
      error: err.message 
    });
  }
};

// Shortlist a candidate (updated to use :id instead of :resumeId)
const shortlistCandidate = async (req, res) => {
  const { id } = req.params;
  try {
    const resume = await Resume.findByIdAndUpdate(
      id,
      { shortlisted: true },
      { new: true }
    ).populate('student', 'name email role');

    if (!resume) {
      return res.status(404).json({ message: 'Resume not found' });
    }

    const notification = new Notification({
      title: 'Shortlisted for Job',
      message: `You have been shortlisted by ${req.user.name}.`,
      userId: resume.student._id,
    });
    await notification.save();

    res.status(200).json({ 
      message: 'Candidate shortlisted successfully', 
      resume: {
        ...resume.toObject(),
        url: `/uploads/resumes/${resume.filename}`
      }
    });
  } catch (err) {
    res.status(500).json({ 
      message: 'Error shortlisting candidate', 
      error: err.message 
    });
  }
};

// Post a job announcement
const postJob = async (req, res) => {
  const { title, description, eligibility, deadline } = req.body;
  try {
    if (!title || !description || !eligibility || !deadline) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const job = new Job({
      title,
      description,
      eligibility,
      deadline,
      companyId: req.user.id,
    });
    await job.save();

    const notification = new Notification({
      title: 'New Job Posting',
      message: `A new job "${title}" has been posted. Apply before ${new Date(deadline).toLocaleDateString()}.`,
    });
    await notification.save();

    res.status(201).json({ 
      message: 'Job posted successfully', 
      job 
    });
  } catch (err) {
    res.status(500).json({ 
      message: 'Error posting job', 
      error: err.message 
    });
  }
};

module.exports = {
  getCompanyResumes,  // Changed from browseResumes
  shortlistCandidate,
  postJob
};