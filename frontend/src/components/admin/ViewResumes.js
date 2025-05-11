import React, { useEffect, useState } from 'react';
import '../../styles/ViewResumes.css';

const ViewResumes = () => {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/resumes/all', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });

        const data = await res.json();

        if (Array.isArray(data)) {
          setResumes(data);
        } else {
          setResumes([]);
        }
      } catch (err) {
        console.error('Error fetching resumes:', err);
        setResumes([]);
      } finally {
        setLoading(false);
      }
    };

    fetchResumes();
  }, []);

  if (loading) return <p className="loading-text">✨ Loading resumes...</p>;

  return (
    <div className="view-resumes-container">
      <h2 className="title">📄 Uploaded Resumes</h2>
      {resumes.length === 0 ? (
        <p className="empty-message">No resumes uploaded yet.</p>
      ) : (
        <ul className="resume-list">
          {resumes.map((resume) => (
            <li key={resume._id} className="resume-card">
              <div className="resume-info">
                <h3>{resume.student?.name || 'N/A'}</h3>
                <p>{resume.student?.email || 'N/A'}</p>
              </div>
              <a
                href={`http://localhost:5000${resume.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="view-button"
              >
                View Resume
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewResumes;
