import React, { useState } from 'react';

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
    <div className="p-4">
      <h2 className="text-2xl mb-4">Manage Interview Guidance</h2>
      <input
        type="text"
        value={faqTitle}
        onChange={(e) => setFaqTitle(e.target.value)}
        placeholder="FAQ Title"
        className="mb-4 p-2 border rounded"
      />
      <textarea
        value={faqDescription}
        onChange={(e) => setFaqDescription(e.target.value)}
        placeholder="FAQ Description"
        className="mb-4 p-2 border rounded"
      />
      <button
        onClick={handleAddFAQ}
        className="bg-blue-600 text-white p-2 rounded"
      >
        Add FAQ
      </button>
    </div>
  );
};

export default ManageInterviewGuidance;
