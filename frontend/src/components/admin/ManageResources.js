import React, { useState } from 'react';

const ManageResources = () => {
  const [resourceTitle, setResourceTitle] = useState('');
  const [resourceLink, setResourceLink] = useState('');

  const handleAddResource = () => {
    // Simulate adding a new resource link
    console.log(`Resource added: ${resourceTitle}, ${resourceLink}`);
    setResourceTitle('');
    setResourceLink('');
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Manage Resources</h2>
      <input
        type="text"
        value={resourceTitle}
        onChange={(e) => setResourceTitle(e.target.value)}
        placeholder="Resource Title"
        className="mb-4 p-2 border rounded"
      />
      <input
        type="text"
        value={resourceLink}
        onChange={(e) => setResourceLink(e.target.value)}
        placeholder="Resource Link"
        className="mb-4 p-2 border rounded"
      />
      <button
        onClick={handleAddResource}
        className="bg-blue-600 text-white p-2 rounded"
      >
        Add Resource
      </button>
    </div>
  );
};

export default ManageResources;
