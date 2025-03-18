const dotenv = require('dotenv');

dotenv.config();  // ✅ Load environment variables

module.exports = {
  JWT_SECRET: process.env.JWT_SECRET || 'fallback_secret',
  JWT_EXPIRATION: process.env.JWT_EXPIRATION || '7d'
};
