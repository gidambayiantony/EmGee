import React, { useState } from 'react';
import './CoverLetterGenerator.css';

const CoverLetterGenerator = () => {
  const [coverLetterContent, setCoverLetterContent] = useState('');
  const [template, setTemplate] = useState('default');
  const [generatedCoverLetter, setGeneratedCoverLetter] = useState('');

  const handleInputChange = (e) => {
    const { value } = e.target;
    setCoverLetterContent(value);
  };

  const handleTemplateChange = (e) => {
    const { value } = e.target;
    setTemplate(value);
  };

  const generateCoverLetter = () => {
    // Code to generate cover letter based on the entered content and selected template
    // This logic can be expanded using templates, user inputs, etc.
    setGeneratedCoverLetter(coverLetterContent);
  };

  const renderTemplateOptions = () => {
    return (
      <select value={template} onChange={handleTemplateChange}>
        <option value="default">Default</option>
        <option value="formal">Formal</option>
        <option value="creative">Creative</option>
      </select>
    );
  };

  return (
    <div className="cover-letter-container">
      <div className="template-options">
        {renderTemplateOptions()}
      </div>
      <textarea
        value={coverLetterContent}
        onChange={handleInputChange}
        placeholder="Enter your cover letter content here"
        className="cover-letter-textarea"
        rows="10"
        cols="50"
      ></textarea>
      <button onClick={generateCoverLetter} className="generate-button">Generate Cover Letter</button>
      <div className="cover-letter">
        <h1>Generated Cover Letter</h1>
        <p>{generatedCoverLetter}</p>
      </div>
    </div>
  );
};

export default CoverLetterGenerator;

