import { loginUser } from './api';

export const authenticateUser = async (email, password) => {
  try {
    await loginUser(email, password);
    const user = JSON.parse(localStorage.getItem('user'));
    return user.role; // Return role based on the JWT token
  } catch (error) {
    throw new Error('Authentication failed');
  }
};
