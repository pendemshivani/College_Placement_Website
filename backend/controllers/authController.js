const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

console.log("✅ JWT_SECRET in authController:", process.env.JWT_SECRET ? "Loaded" : "Not Loaded");
console.log("✅ MONGO_URI in authController:", process.env.MONGO_URI ? "Loaded" : "Not Loaded");

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret';
const JWT_EXPIRATION = process.env.JWT_EXPIRATION || '7d';

// Register new user
exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    const existingUser = await User.findOne({ email: email.toLowerCase() });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email: email.toLowerCase(), password: hashedPassword, role });
    await user.save();

    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.status(201).json({ message: 'User registered successfully', token, role: user.role });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
};

// Login user
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    res.status(200).json({ message: 'Login successful', token, role: user.role });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err });
  }
};

// Get user info
exports.getUserInfo = async (req, res) => {
  try {
    const user = req.user;
    const userInfo = {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role
    };
    res.status(200).json(userInfo);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching user info', error: err.message });
  }
};