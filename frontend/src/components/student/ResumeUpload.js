import React, { useState } from 'react';

const ResumeUpload = () => {
  const [resume, setResume] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!resume) {
      setMessage('Please upload a resume.');
      return;
    }

    // Simulate file upload
    console.log(`Resume uploaded: ${resume.name}`);
    setMessage('Resume uploaded successfully!');
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Upload Resume</h2>
      
      {message && <p className="text-green-600 mb-4">{message}</p>}

      <input 
        type="file" 
        onChange={handleFileChange} 
        className="mb-4 p-2 w-full border border-gray-300 rounded"
      />
      <button 
        onClick={handleUpload} 
        className="bg-blue-600 text-white p-2 rounded w-full"
      >
        Upload Resume
      </button>
    </div>
  );
};

export default ResumeUpload;
