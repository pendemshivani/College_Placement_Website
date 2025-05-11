import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: { 'Content-Type': 'application/json' },
});

// Authentication Service
export const loginUser = async (email, password) => {
  const response = await api.post('/auth/login', { email, password });
  localStorage.setItem('token', response.data.token);
};

// Student Services
export const uploadResume = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  await api.post('/students/upload', formData, {
    headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
  });
};

export const getJobListings = async () => {
  const response = await api.get('/students/job-listings', {
    headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data;
};

// Admin Services
export const getJobs = async () => {
  const response = await api.get('/admin/jobs', {
    headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data;
};

export const postJob = async (jobData) => {
  await api.post('/admin/create-job', jobData, {
    headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
  });
};

// Notification Service
export const getNotifications = async () => {
  const response = await api.get('/students/notifications', {
    headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data;
};
