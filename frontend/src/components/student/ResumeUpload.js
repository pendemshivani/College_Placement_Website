import React, { useState } from 'react';
import '../../styles/ResumeUpload.css';

const ResumeUpload = () => {
  const [resume, setResume] = useState(null);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
    setMessage('');
    setIsError(false);
  };

  const handleUpload = async () => {
    if (!resume) {
      setMessage('Please select a resume file to upload.');
      setIsError(true);
      return;
    }

    const formData = new FormData();
    formData.append('resume', resume);

    try {
      const response = await fetch('http://localhost:5000/api/student/upload-resume', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setIsError(false);
        setResume(null);
      } else {
        setMessage(data.message || 'Upload failed');
        setIsError(true);
      }
    } catch (error) {
      console.error(error);
      setMessage('Server error during upload');
      setIsError(true);
    }
  };

  return (
    <div className="resume-upload-container">
      <h2 className="resume-title">Upload Your Resume</h2>

      {message && (
        <div className={isError ? 'message error' : 'message success'}>
          {message}
        </div>
      )}

      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
        className="file-input"
      />

      <button onClick={handleUpload} className="upload-button">
        Upload Resume
      </button>
    </div>
  );
};

export default ResumeUpload;
