// ResumeTemplates.js
import React from 'react';

const ResumeTemplates = () => {
  // Array of different resume templates
  const templates = [
    {
      id: 1,
      name: 'Template 1',
      // Design and structure for Template 1
    },
    {
      id: 2,
      name: 'Template 2',
      // Design and structure for Template 2
    },
    // Add more template objects as needed
  ];

  return (
    <div>
      <h2>Choose a Resume Template</h2>
      <div className="template-list">
        {templates.map((template) => (
          <div key={template.id} className="template-preview">
            {/* Display template preview with selectable options */}
            <h3>{template.name}</h3>
            {/* Show the design or preview of each template */}
            {/* Allow users to select a template */}
            <button>Select Template</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeTemplates;

