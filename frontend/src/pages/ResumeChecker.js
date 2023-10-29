// ResumeChecker.js
import React, { useState } from 'react';

const ResumeChecker = () => {
  const [resumeData, setResumeData] = useState('');
  const [errors, setErrors] = useState([]);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setResumeData(value);
  };

  const checkResume = () => {
    // Code to analyze the resume and find potential errors or improvements
    // This could involve checking for formatting, keyword optimization, etc.
    const simulatedErrors = ['Spelling errors', 'Weak action verbs', 'Improper formatting'];
    setErrors(simulatedErrors);
  };

  return (
    <div>
      <textarea
        value={resumeData}
        onChange={handleInputChange}
        placeholder="Paste your resume content here"
        rows="10"
        cols="50"
      ></textarea>
      <button onClick={checkResume}>Check Resume</button>
      {errors.length > 0 && (
        <div>
          <h3>Resume Errors:</h3>
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ResumeChecker;

