import React from 'react';
import './ResumeWritingTips.css'; // Import the corresponding CSS file

const ResumeWritingTips = () => {
  // Array of resume writing tips
  const tips = [
    'Tailor your resume to the job you\'re applying for.',
    'Use action verbs to describe your experience.',
    'Quantify your achievements whenever possible.',
    'Highlight your most relevant skills and experience.',
    'Use keywords throughout your resume that are relevant to the jobs you\'re applying for.',
    'Proofread your resume carefully before submitting it.',
    'Get feedback on your resume from a friend, family member, or career counselor.',
  ];

  // Array of resume writing tips with descriptions
  const tipsWithDescriptions = [
    {
      tip: 'Tailor your resume to the job you\'re applying for.',
      description:
        'Take some time to read the job description carefully and identify the key skills and experience that the employer is looking for. Then, make sure to highlight your most relevant skills and experience on your resume.',
    },
    {
      tip: 'Use action verbs to describe your experience.',
      description:
        'Instead of simply listing your duties and responsibilities, use action verbs to describe your accomplishments. For example, instead of saying "responsible for developing and maintaining company website," say "developed and maintained company website, increasing traffic by 20%."',
    },
    {
      tip: 'Quantify your achievements whenever possible.',
      description:
        'Using numbers and metrics to quantify your achievements will help employers see the value that you can bring to their company. For example, instead of saying "increased sales," say "increased sales by 15%."',
    },
    {
      tip: 'Highlight your most relevant skills and experience.',
      description:
        'Don\'t just include everything on your resume. Instead, focus on highlighting your most relevant skills and experience for the job you\'re applying for. You can do this by using keywords throughout your resume and by tailoring your resume to the specific job description.',
    },
    {
      tip: 'Use keywords throughout your resume that are relevant to the jobs you\'re applying for.',
      description:
        'When employers are screening resumes, they often use applicant tracking systems (ATS) to scan for keywords that are relevant to the job opening. To make sure your resume gets noticed, use keywords throughout your resume, including in your skills section, work experience section, and education section.',
    },
    {
      tip: 'Proofread your resume carefully before submitting it.',
      description:
        'Typos and grammatical errors can make you look unprofessional. Make sure to proofread your resume carefully before submitting it to any potential employers.',
    },
    {
      tip: 'Get feedback on your resume from a friend, family member, or career counselor.',
      description:
        'Another set of eyes can be helpful in catching any errors or omissions on your resume. Ask a friend, family member, or career counselor to review your resume and give you feedback.',
    },
  ];

  return (
    <div>
      <h2>Expert Resume Writing Tips</h2>
      <ul>
        {tipsWithDescriptions.map((tip, index) => (
          <li key={index}>
            <h3>{tip.tip}</h3>
            <p>{tip.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResumeWritingTips;

