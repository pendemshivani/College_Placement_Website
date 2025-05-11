import React, { useEffect, useState } from 'react';
import '../../styles/JobListings.css';

const JobListings = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    setJobs([
      {
        title: 'Software Engineer',
        company: 'TechCorp',
        location: 'Bangalore, India',
        description: 'Develop scalable web applications and REST APIs using modern tech stacks.',
        skills: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
        eligibility: 'B.Tech in Computer Science or related field, minimum 7.0 CGPA',
      },
      {
        title: 'Data Analyst',
        company: 'DataInc',
        location: 'Hyderabad, India',
        description: 'Analyze business data and create dashboards using BI tools.',
        skills: ['SQL', 'Python', 'Power BI', 'Excel'],
        eligibility: 'B.Sc/B.Tech in Statistics, Mathematics or related field, minimum 6.5 CGPA',
      },
      {
        title: 'UI/UX Designer',
        company: 'Designify',
        location: 'Mumbai, India',
        description: 'Design modern user interfaces for web and mobile platforms.',
        skills: ['Figma', 'Adobe XD', 'CSS', 'User Research'],
        eligibility: 'Bachelor’s in Design or related field, portfolio required',
      },
      {
        title: 'Cloud Engineer',
        company: 'CloudNova',
        location: 'Pune, India',
        description: 'Implement and manage cloud infrastructure for scalable applications.',
        skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
        eligibility: 'B.Tech in IT or related field, AWS certification preferred',
      },
      {
        title: 'Cybersecurity Intern',
        company: 'SecureNet',
        location: 'Remote',
        description: 'Assist in vulnerability scanning and policy auditing for enterprise systems.',
        skills: ['Linux', 'Wireshark', 'Python', 'Security Basics'],
        eligibility: 'Final year students in B.Tech/B.Sc with basic security knowledge',
      },
    ]);
  }, []);

  return (
    <div className="job-listings-container">
      <h2 className="job-listings-title">Available Job Listings</h2>
      {jobs.map((job, index) => (
        <div key={index} className="job-card">
          <h3 className="job-title">{job.title}</h3>
          <p><strong>Company:</strong> {job.company}</p>
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Description:</strong> {job.description}</p>
          <p><strong>Required Skills:</strong> {job.skills.join(', ')}</p>
          <p><strong>Eligibility:</strong> {job.eligibility}</p>
        </div>
      ))}
    </div>
  );
};

export default JobListings;
