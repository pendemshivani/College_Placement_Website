import React, { useState } from 'react';
import BrowseResumes from '../components/company/BrowseResumes';
import PostJobs from '../components/company/PostJobs';
import ShortlistCandidates from '../components/company/ShortlistCandidates';
import '../styles/dashboard.css';

const CompanyDashboard = () => {
  const [activeFeature, setActiveFeature] = useState('browse-resumes');

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="dashboard-heading">
        <h1>Company Dashboard</h1>
      </div>

      <div className="dashboard-layout">
        {/* Sidebar Navigation */}
        <div className="sidebar">
          <ul>
            <li className={activeFeature === 'browse-resumes' ? 'active' : ''} onClick={() => setActiveFeature('browse-resumes')}>
              Browse Resumes
            </li>
            <li className={activeFeature === 'shortlist-candidates' ? 'active' : ''} onClick={() => setActiveFeature('shortlist-candidates')}>
              Shortlist Candidates
            </li>
            <li className={activeFeature === 'post-jobs' ? 'active' : ''} onClick={() => setActiveFeature('post-jobs')}>
              Post Jobs
            </li>
          </ul>
        </div>

        {/* Feature Content */}
        <div className="dashboard-content">
          {activeFeature === 'browse-resumes' && <BrowseResumes />}
          {activeFeature === 'shortlist-candidates' && <ShortlistCandidates />}
          {activeFeature === 'post-jobs' && <PostJobs />}
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
