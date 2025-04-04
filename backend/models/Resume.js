const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  fileUrl: { type: String, required: true },
  shortlisted: { type: Boolean, default: false },
});

module.exports = mongoose.model('Resume', resumeSchema);