import React, { useState } from 'react';

const ManageJobs = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  const handleAddJob = () => {
    // Simulate adding a job listing
    console.log(`Job added: ${jobTitle}, ${jobDescription}`);
  };

  return (
    <div className="p-4">
      <h2>Manage Job Listings</h2>
      <input 
        type="text" 
        value={jobTitle} 
        onChange={(e) => setJobTitle(e.target.value)} 
        placeholder="Job Title" 
        className="mb-4 p-2"
      />
      <textarea 
        value={jobDescription} 
        onChange={(e) => setJobDescription(e.target.value)} 
        placeholder="Job Description" 
        className="mb-4 p-2"
      />
      <button onClick={handleAddJob} className="bg-green-600 text-white p-2">Add Job</button>
    </div>
  );
};

export default ManageJobs;
