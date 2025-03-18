import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import AdminDashboard from './pages/AdminDashboard';
import CompanyDashboard from './pages/CompanyDashboard';
import Home from './pages/Home';
import StudentDashboard from './pages/StudentDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/company" element={<CompanyDashboard />} />
        <Route path="/login" element={<Login />} />  {/* Add Login Route */}
        <Route path="/register" element={<Register />} />  {/* Add Register Route */}
      </Routes>
    </Router>
  );
};

export default App;
