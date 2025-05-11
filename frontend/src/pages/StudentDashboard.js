import React, { useState } from 'react';
import InterviewGuidance from '../components/student/InterviewGuidance';
import JobListings from '../components/student/JobListings';
import Notifications from '../components/student/Notifications';
import ResourceLinks from '../components/student/ResourceLinks';
import ResumeUpload from '../components/student/ResumeUpload';
import "../styles/dashboard.css"; // Ensure correct path

const StudentDashboard = () => {
  const [activeFeature, setActiveFeature] = useState('resume-upload');

  return (
    <div className="dashboard-container">
      {/* Heading */}
      <div className="dashboard-heading">
        <h1>Student Dashboard</h1>
      </div>

      {/* Layout */}
      <div className="dashboard-layout">
        {/* Sidebar Navigation */}
        <div className="sidebar">
          <ul>
            <li className={activeFeature === 'resume-upload' ? 'active' : ''} onClick={() => setActiveFeature('resume-upload')}>
              Resume Upload
            </li>
            <li className={activeFeature === 'job-listings' ? 'active' : ''} onClick={() => setActiveFeature('job-listings')}>
              Job Listings
            </li>
            <li className={activeFeature === 'notifications' ? 'active' : ''} onClick={() => setActiveFeature('notifications')}>
              Notifications
            </li>
            <li className={activeFeature === 'interview-guidance' ? 'active' : ''} onClick={() => setActiveFeature('interview-guidance')}>
              Interview Guidance
            </li>
            <li className={activeFeature === 'resource-links' ? 'active' : ''} onClick={() => setActiveFeature('resource-links')}>
              Resource Links
            </li>
          </ul>
        </div>

        {/* Feature Content */}
        <div className="dashboard-content">
          {activeFeature === 'resume-upload' && <ResumeUpload />}
          {activeFeature === 'job-listings' && <JobListings />}
          {activeFeature === 'notifications' && <Notifications />}
          {activeFeature === 'interview-guidance' && <InterviewGuidance />}
          {activeFeature === 'resource-links' && <ResourceLinks />}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
