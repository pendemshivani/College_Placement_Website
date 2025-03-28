const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authroutes'); // Ensure the correct path

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// Register the routes
app.use('/api/auth', authRoutes); // Ensure your routes are being used

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
