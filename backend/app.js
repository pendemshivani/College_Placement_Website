const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const studentRoutes = require('./routes/studentRoutes');
const adminRoutes = require('./routes/adminRoutes');
const companyRoutes = require('./routes/companyRoutes');

const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes); // ✅ Mount authRoutes under /api/auth
app.use('/api/students', studentRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/companies', companyRoutes);

// Test route
app.get('/test', (req, res) => {
  res.send('Server is running');
});

module.exports = app;