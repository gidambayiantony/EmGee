// Dashboard.js
import React from 'react';

const Dashboard = () => {
  // You can add additional logic here for user-specific data or actions

  return (
    <div>
      <h2>User Dashboard</h2>
      <ul>
        <li><a href="/resume-builder">Resume Builder</a></li>
        <li><a href="/cover-letter-generator">Cover Letter Generator</a></li>
        <li><a href="/resume-checker">Resume Checker</a></li>
        <li><a href="/payment">Payment Integration</a></li>
        {/* Additional links or components as needed */}
      </ul>
    </div>
  );
};

export default Dashboard;

