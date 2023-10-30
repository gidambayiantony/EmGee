import React from "react";
import "./Dashboard.css"; // Import the CSS file
import ResumeBuilder from "./ResumeBuilder";
import CoverLetterGenerator from "./CoverLetterGenerator";
import ResumeChecker from "./ResumeChecker";

const Dashboard = () => {
  return (
    <main>
      <header>
        <h1>Excellent-CV</h1>
        <img src="/images/logo.png" alt="Excellent-CV logo" />
      </header>

      <section>
        <ResumeBuilder />
      </section>

      <section>
        <CoverLetterGenerator />
      </section>

      <section>
        <ResumeChecker />
      </section>

      <footer>
        <p>Excellent-CV &copy; 2023</p>
      </footer>
    </main>
  );
};

export default Dashboard;
