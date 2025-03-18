import React, { useEffect, useState } from 'react';

const ResourceLinks = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    // Simulate fetching resource links
    setResources([
      { title: 'Java Programming', url: 'https://www.learnjava.com' },
      { title: 'Python Tutorials', url: 'https://www.learnpython.org' },
      { title: 'Aptitude Practice', url: 'https://www.aptitude.com' },
    ]);
  }, []);

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Resource Links</h2>
      {resources.map((resource, index) => (
        <div key={index} className="bg-gray-100 p-4 mb-4 rounded">
          <a href={resource.url} className="text-blue-600" target="_blank" rel="noopener noreferrer">
            {resource.title}
          </a>
        </div>
      ))}
    </div>
  );
};

export default ResourceLinks;
