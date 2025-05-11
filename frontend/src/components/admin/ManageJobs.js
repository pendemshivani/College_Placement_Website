import React, { useState } from 'react';
import '../../styles/ManageJobs.css'; // Adjust path as per your structure

const ManageJobs = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  const handleAddJob = () => {
    console.log(`Job added: ${jobTitle}, ${jobDescription}`);
    setJobTitle('');
    setJobDescription('');
  };

  return (
    <div className="manage-jobs-page">
      <div className="manage-jobs-container">
        <h2 className="manage-jobs-title">Manage Job Listings</h2>
        <input 
          type="text" 
          value={jobTitle} 
          onChange={(e) => setJobTitle(e.target.value)} 
          placeholder="Job Title" 
          className="manage-jobs-input"
        />
        <textarea 
          value={jobDescription} 
          onChange={(e) => setJobDescription(e.target.value)} 
          placeholder="Job Description" 
          className="manage-jobs-textarea"
        />
        <button onClick={handleAddJob} className="manage-jobs-button">
          Add Job
        </button>
      </div>
    </div>
  );
};

export default ManageJobs;
