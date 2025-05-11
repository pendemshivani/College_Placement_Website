import React, { useState } from 'react';
import '../../styles/ManageResources.css'; // Adjust path if needed

const ManageResources = () => {
  const [resourceTitle, setResourceTitle] = useState('');
  const [resourceLink, setResourceLink] = useState('');

  const handleAddResource = () => {
    console.log(`Resource added: ${resourceTitle}, ${resourceLink}`);
    setResourceTitle('');
    setResourceLink('');
  };

  return (
    <div className="manage-resources-page">
      <div className="manage-resources-container">
        <h2 className="manage-resources-title">Manage Resources</h2>
        <input
          type="text"
          value={resourceTitle}
          onChange={(e) => setResourceTitle(e.target.value)}
          placeholder="Resource Title"
          className="manage-resources-input"
        />
        <input
          type="text"
          value={resourceLink}
          onChange={(e) => setResourceLink(e.target.value)}
          placeholder="Resource Link"
          className="manage-resources-input"
        />
        <button
          onClick={handleAddResource}
          className="manage-resources-button"
        >
          Add Resource
        </button>
      </div>
    </div>
  );
};

export default ManageResources;
