import React, { useState } from 'react';
import ManageInterviewGuidance from '../components/admin/ManageInterviewGuidance';
import ManageJobs from '../components/admin/ManageJobs';
import ManageResources from '../components/admin/ManageResources';
import SendNotifications from '../components/admin/SendNotifications';
import ShortlistStudents from '../components/admin/ShortlistStudents';
import ViewResumes from '../components/admin/ViewResumes';
import '../styles/dashboard.css';

const AdminDashboard = () => {
  const [activeFeature, setActiveFeature] = useState('manage-jobs');

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="dashboard-heading">
        <h1>Admin Dashboard</h1>
      </div>

      <div className="dashboard-layout">
        {/* Sidebar Navigation */}
        <div className="sidebar">
          <ul>
            <li className={activeFeature === 'manage-jobs' ? 'active' : ''} onClick={() => setActiveFeature('manage-jobs')}>
              Manage Jobs
            </li>
            <li className={activeFeature === 'view-resumes' ? 'active' : ''} onClick={() => setActiveFeature('view-resumes')}>
              View Resumes
            </li>
            <li className={activeFeature === 'send-notifications' ? 'active' : ''} onClick={() => setActiveFeature('send-notifications')}>
              Send Notifications
            </li>
            <li className={activeFeature === 'shortlist-students' ? 'active' : ''} onClick={() => setActiveFeature('shortlist-students')}>
              Shortlist Students
            </li>
            <li className={activeFeature === 'manage-interview-guidance' ? 'active' : ''} onClick={() => setActiveFeature('manage-interview-guidance')}>
              Manage Interview Guidance
            </li>
            <li className={activeFeature === 'manage-resources' ? 'active' : ''} onClick={() => setActiveFeature('manage-resources')}>
              Manage Resources
            </li>
          </ul>
        </div>

        {/* Feature Content */}
        <div className="dashboard-content">
          {activeFeature === 'manage-jobs' && <ManageJobs />}
          {activeFeature === 'view-resumes' && <ViewResumes />}
          {activeFeature === 'send-notifications' && <SendNotifications />}
          {activeFeature === 'shortlist-students' && <ShortlistStudents />}
          {activeFeature === 'manage-interview-guidance' && <ManageInterviewGuidance />}
          {activeFeature === 'manage-resources' && <ManageResources />}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
