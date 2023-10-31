import React from 'react';
import './ResumeTemplates.css'; // Import the CSS file for styling

const ResumeTemplates = () => {
  const templates = [
    {
      id: 1,
      name: 'Modern Template 1',
      design: require('./templates/modern-template-1.png'),
    },
    {
      id: 2,
      name: 'Modern Template 2',
      design: require('./templates/modern-template-2.png'),
    },
    {
      id: 3,
      name: 'Traditional Template 1',
      design: require('./templates/traditional-template-1.png'),
    },
    {
      id: 4,
      name: 'Traditional Template 2',
      design: require('./templates/traditional-template-2.png'),
    },
  ];

  return (
    <div className="resume-templates">
      <h2>Choose a Resume Template</h2>
      <div className="template-list">
        {templates.map((template) => (
          <div key={template.id} className="template-preview">
            <img src={template.design} alt="Resume template preview" />
            <h3>{template.name}</h3>
            <button>Select Template</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumeTemplates;
