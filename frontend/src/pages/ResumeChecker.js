// ResumeChecker.js
import React, { useState } from 'react';
import './ResumeChecker.css'; // Import the associated CSS file

const ResumeChecker = () => {
  const [resumeData, setResumeData] = useState('');
  const [errors, setErrors] = useState([]);

  const handleInputChange = (e) => {
    const { value } = e.target;
    setResumeData(value);
  };

  const checkResume = () => {
    // Simulated analysis of the resume content for errors
    const simulatedErrors = analyzeResume(resumeData); // This function checks the resume data for errors
    setErrors(simulatedErrors);
  };

  // Simulated function for resume analysis
  const analyzeResume = (resumeContent) => {
    // This function could contain your actual analysis logic for errors or improvements in a real application
    // For demonstration, I'm just returning simulated errors here
    return ['Spelling errors', 'Weak action verbs', 'Improper formatting'];
  };

  return (
    <div className="resume-checker">
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
          <ul className="resume-errors">
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

