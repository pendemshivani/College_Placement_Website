import React, { useEffect, useState } from 'react';
import '../../styles/ResourceLinks.css'; // // Link to external CSS

const ResourceLinks = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    setResources([
      { title: 'Java Programming', url: 'https://www.w3schools.com/java/', desc: 'Learn Java basics and OOP concepts' },
      { title: 'Python Tutorials', url: 'https://www.learnpython.org', desc: 'Interactive Python learning' },
      { title: 'Aptitude Practice', url: 'https://www.aptitude.com', desc: 'Sharpen your aptitude skills' },
      { title: 'JavaScript Reference', url: 'https://riptutorial.com/javascript', desc: 'Code snippets for JS topics' },
    ]);
  }, []);

  return (
    <div className="resource-container">
      <h2 className="resource-title">📚 Explore Learning Resources</h2>
      <div className="resource-grid">
        {resources.map((resource, index) => (
          <div key={index} className="resource-card">
            <div className="resource-icon">📘</div>
            <div className="resource-info">
              <a
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="resource-link"
              >
                {resource.title}
              </a>
              <p className="resource-desc">{resource.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceLinks;
