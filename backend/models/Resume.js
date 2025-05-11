const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  filename: {
    type: String,
    required: true,
    unique: true
  },
  originalName: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  },
  mimeType: {
    type: String,
    required: true
  },
  shortlisted: {
    type: Boolean,
    default: false,
  },
  uploadedAt: {
    type: Date,
    default: Date.now,
  }
}, { versionKey: false });

module.exports = mongoose.model('Resume', ResumeSchema);