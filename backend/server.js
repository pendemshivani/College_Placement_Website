const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');

// Load env variables
dotenv.config();

// Import routes
const authRoutes = require('./routes/authRoutes');
const adminRoutes = require('./routes/adminRoutes');
const companyRoutes = require('./routes/companyRoutes');
const studentRoutes = require('./routes/studentRoutes');
const resumeRoutes = require('./routes/resumeRoutes');


// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Serve uploaded resumes
app.use('/uploads/resumes', express.static(path.join(__dirname, 'uploads/resumes')));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/company', companyRoutes);
app.use('/api/student', studentRoutes);
app.use('/api/resumes', resumeRoutes); 

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});