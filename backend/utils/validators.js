const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const validatePassword = (password) => {
    return password.length >= 6; // Minimum 6 characters
  };
  
  const validateJobPost = (jobData) => {
    const { title, company, description, requirements } = jobData;
    return title && company && description && requirements;
  };
  
  const validateResumeUpload = (file) => {
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    return file && allowedTypes.includes(file.mimetype);
  };
  
  module.exports = { validateEmail, validatePassword, validateJobPost, validateResumeUpload };
  