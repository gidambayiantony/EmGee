// ResumeWritingTips.js
import React from 'react';

const ResumeWritingTips = () => {
  // Array of resume writing tips
  const tips = [
    "Tailor your resume to the job you're applying for.",
    "Use action verbs to describe your experience.",
    "Quantify your achievements whenever possible.",
    // Add more tips as needed
  ];

  return (
    <div>
      <h2>Expert Resume Writing Tips</h2>
      <ul>
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResumeWritingTips;

