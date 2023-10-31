import React, { useState } from "react";
import "./ResumeBuilder.css";

const ResumeBuilder = () => {
  const [resumeData, setResumeData] = useState({
    experience: [{ company: "", position: "", startDate: "", endDate: "", description: "" }],
    education: [{ school: "", degree: "", startDate: "", endDate: "" }],
    skills: "",
    languages: "",
    interests: "",
    achievements: "",
    referees: [],
    professionalSummary: "",
    template: "",
  });

  const handleInputChange = (e, section, index) => {
    const { name, value } = e.target;
    const data = [...resumeData[section]];
    data[index] = { ...data[index], [name]: value };
    setResumeData({ ...resumeData, [section]: data });
  };

  const addSection = (section) => {
    setResumeData({ ...resumeData, [section]: [...resumeData[section], {}] });
  };

  const removeSection = (section, index) => {
    const data = [...resumeData[section]];
    data.splice(index, 1);
    setResumeData({ ...resumeData, [section]: data });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Resume submitted:", resumeData);
  };

  const templates = [
    { name: "Classic", value: "classic" },
    { name: "Modern", value: "modern" },
    { name: "Creative", value: "creative" },
  ];

  return (
    <form className="resume-builder-form" onSubmit={handleSubmit}>
      {/* Template selection */}
      <select name="template" value={resumeData.template} onChange={(e) => handleInputChange(e, "template", 0)}>
        {templates.map((template) => (
          <option key={template.value} value={template.value}>
            {template.name}
          </option>
        ))}
      </select>

      {/* Experience */}
      {resumeData.experience.map((experience, index) => (
        <section key={index}>
          <h3>Experience</h3>
          <input type="text" name="company" value={experience.company} placeholder="Company" onChange={(e) => handleInputChange(e, "experience", index)} />
          {/* Other input fields for experience */}
        </section>
      ))}
      <button type="button" onClick={() => addSection("experience")}>Add Experience</button>

      {/* Education */}
      {resumeData.education.map((education, index) => (
        <section key={index}>
          <h3>Education</h3>
          <input type="text" name="school" value={education.school} placeholder="School" onChange={(e) => handleInputChange(e, "education", index)} />
          {/* Other input fields for education */}
        </section>
      ))}
      <button type="button" onClick={() => addSection("education")}>Add Education</button>

      {/* Submit button */}
      <button type="submit" className="submit-button">Submit Resume</button>
    </form>
  );
};

export default ResumeBuilder;

