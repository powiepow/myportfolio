import React from 'react';

const Experience = () => (
  <section id="experience">
    <div className="container">
      <h2><span className="underline-first-two">REL</span><span>EVANT</span> EXPERIENCE</h2>
      <div className="experience-grid">
        <div className="experience-card">
          <div className="experience-details">
            <h3>PHYTOSENSE: Crop Disease Diagnostic Platform</h3>
            <div className="role">Project Manager</div>
            <p>Developed a PHP-based crop disease diagnostic platform, Phytosense, designed for crop disease detection through image analysis, enabling real-time diagnosis, treatment recommendations, and prevention tips using CNN, OpenCV, and TensorFlow.
            </p>
          </div>
          <div className="experience-duration">
            June 2024 - Dec 2024
          </div>
        </div>
        <div className="experience-card">
          <div className="experience-details">
            <h3>WEBCRAFT</h3>
            <div className="role">Project Manager</div>
            <p>Developed PHP-based inventory management system tailored for the College of Medicine, designed to streamline equipment tracking, usage monitoring, and maintenance scheduling.</p>
          </div>
          <div className="experience-duration">
            June 2022 - Dec 2023
          </div>
        </div>
        <div className="experience-card">
          <div className="experience-details">
            <h3>Freelance</h3>
            <div className="role">Administrative Assistant</div>
            <p>Assisted clients with resumes, application letters, online appointments (PSA, CSE, passport, etc.), and online IDs (SSS, Pag-IBIG, etc.).</p>
          </div>
          <div className="experience-duration">
            Jan 2023 - Present
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;