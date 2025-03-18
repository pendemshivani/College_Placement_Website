import React, { useState } from 'react';

const PostJobs = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [error, setError] = useState('');

  const handlePostJob = () => {
    if (!jobTitle || !jobDescription) {
      setError('Please fill in both the job title and description.');
      return;
    }

    // Simulate posting a job
    console.log(`Job posted: ${jobTitle}, ${jobDescription}`);
    setError('');
    setJobTitle('');
    setJobDescription('');
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Post Job</h2>
      
      {error && <p className="text-red-600 mb-4">{error}</p>}

      <input 
        type="text" 
        value={jobTitle} 
        onChange={(e) => setJobTitle(e.target.value)} 
        placeholder="Job Title" 
        className="mb-4 p-2 w-full border border-gray-300 rounded"
      />
      
      <textarea 
        value={jobDescription} 
        onChange={(e) => setJobDescription(e.target.value)} 
        placeholder="Job Description" 
        className="mb-4 p-2 w-full border border-gray-300 rounded"
      />

      <button 
        onClick={handlePostJob} 
        className="bg-green-600 text-white p-2 rounded w-full"
      >
        Post Job
      </button>
    </div>
  );
};

export default PostJobs;
