import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ViewResumes from './components/admin/ViewResumes';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import BrowseResumes from './components/company/BrowseResumes'; // ✅ Correct import
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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/view-resumes" element={<ViewResumes />} />
        <Route path="/company/view-resumes" element={<BrowseResumes />} /> {/* ✅ Fixed */}
      </Routes>
    </Router>
  );
};

export default App;
