// adminController.js
const Job = require('../models/Job');
const Notification = require('../models/Notification');

// Create job posting
exports.createJob = async (req, res) => {
  const { company, title, eligibility, deadline } = req.body;
  try {
    const job = new Job({ company, title, eligibility, deadline });
    await job.save();
    res.status(201).json({ message: 'Job posted successfully', job });
  } catch (err) {
    res.status(500).json({ message: 'Error posting job', error: err.message });
  }
};

// Send notification to all students
exports.sendNotification = async (req, res) => {
  const { title, message } = req.body;
  try {
    const notification = new Notification({ title, message });
    await notification.save();
    res.status(200).json({ message: 'Notification sent successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error sending notification', error: err.message });
  }
};
