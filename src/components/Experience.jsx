import React from 'react';

const Experience = () => (
  <section id="experience">
    <div className="container">
      <h2><span className="underline-first-two">My</span> Experience</h2>
      <div className="experience-grid">
        <div className="experience-card">
          <div className="experience-details">
            <h3>WEBCRAFT</h3>
            <div className="role">Project Manager</div>
            <p>Creating an inventory system for the College of Medicine and our client Mr. Torres</p>
          </div>
          <div className="experience-duration">
            Jun 2022 - Dec 2023
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