import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ role }) => {
  return (
    <nav className="bg-gray-700 p-4 text-white">
      <ul className="flex justify-between">
        <li>
          <Link to="/">Home</Link>
        </li>
        {role === 'student' && (
          <>
            <li><Link to="/student">Dashboard</Link></li>
            <li><Link to="/student/job-listings">Jobs</Link></li>
          </>
        )}
        {role === 'admin' && (
          <>
            <li><Link to="/admin">Dashboard</Link></li>
            <li><Link to="/admin/manage-jobs">Manage Jobs</Link></li>
          </>
        )}
        {role === 'company' && (
          <>
            <li><Link to="/company">Dashboard</Link></li>
            <li><Link to="/company/browse-resumes">Browse Resumes</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
