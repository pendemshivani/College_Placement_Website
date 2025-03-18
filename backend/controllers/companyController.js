const Resume = require('../models/Resume');
const Job = require('../models/Job');
const Notification = require('../models/Notification');

// Browse resumes
exports.browseResumes = async (req, res) => {
  try {
    // Fetch all resumes from the database
    const resumes = await Resume.find().populate('userId', 'name email role');
    res.status(200).json({ message: 'Resumes fetched successfully', resumes });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching resumes', error: err });
  }
};

// Shortlist a candidate
exports.shortlistCandidate = async (req, res) => {
  const { resumeId } = req.params;
  try {
    // Find the resume by ID
    const resume = await Resume.findById(resumeId).populate('userId', 'name email role');
    if (!resume) {
      return res.status(404).json({ message: 'Resume not found' });
    }

    // Simulate shortlisting logic (e.g., mark as shortlisted in the database)
    resume.shortlisted = true;
    await resume.save();

    // Send a notification to the student
    const notification = new Notification({
      title: 'Shortlisted for Job',
      message: `You have been shortlisted for a job by ${req.user.name}.`,
      userId: resume.userId,
    });
    await notification.save();

    res.status(200).json({ message: 'Candidate shortlisted successfully', resume });
  } catch (err) {
    res.status(500).json({ message: 'Error shortlisting candidate', error: err });
  }
};

// Post a job announcement
exports.postJob = async (req, res) => {
  const { title, description, eligibility, deadline } = req.body;
  try {
    // Create a new job posting
    const job = new Job({
      title,
      description,
      eligibility,
      deadline,
      companyId: req.user.id, // Attach the company ID to the job posting
    });
    await job.save();

    // Send a notification to all students
    const notification = new Notification({
      title: 'New Job Posting',
      message: `A new job posting "${title}" has been added. Apply before ${deadline}.`,
    });
    await notification.save();

    res.status(201).json({ message: 'Job posted successfully', job });
  } catch (err) {
    res.status(500).json({ message: 'Error posting job', error: err });
  }
};