import React, { useEffect, useState } from 'react';

const JobListings = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Simulate fetching job listings
    setJobs([
      { title: 'Software Engineer', company: 'TechCorp', description: 'Develop software solutions.' },
      { title: 'Data Analyst', company: 'DataInc', description: 'Analyze and interpret data.' },
    ]);
  }, []);

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Job Listings</h2>
      {jobs.map((job, index) => (
        <div key={index} className="bg-gray-100 p-4 mb-4 rounded">
          <h3 className="font-semibold">{job.title}</h3>
          <p><strong>Company:</strong> {job.company}</p>
          <p><strong>Description:</strong> {job.description}</p>
        </div>
      ))}
    </div>
  );
};

export default JobListings;
