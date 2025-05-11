import React, { useState } from 'react';
import '../../styles/ManageInterviewGuidance.css'; // Ensure the path is correct

const ManageInterviewGuidance = () => {
  const [faqTitle, setFaqTitle] = useState('');
  const [faqDescription, setFaqDescription] = useState('');

  const handleAddFAQ = () => {
    // Simulate adding a new interview guidance FAQ
    console.log(`FAQ Added: ${faqTitle}, ${faqDescription}`);
    setFaqTitle('');
    setFaqDescription('');
  };

  return (
    <div className="guidance-page">
      <div className="manage-guidance-container">
        <h2 className="manage-guidance-title">Manage Interview Guidance</h2>
        <input
          type="text"
          value={faqTitle}
          onChange={(e) => setFaqTitle(e.target.value)}
          placeholder="FAQ Title"
          className="manage-input"
        />
        <textarea
          value={faqDescription}
          onChange={(e) => setFaqDescription(e.target.value)}
          placeholder="FAQ Description"
          className="manage-textarea"
        />
        <button
          onClick={handleAddFAQ}
          className="manage-button"
        >
          Add FAQ
        </button>
      </div>
    </div>
  );
};

export default ManageInterviewGuidance;
