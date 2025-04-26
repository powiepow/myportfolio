import React from 'react';
import Cert1 from '../assets/Cert1.jpg';
import Cert2 from '../assets/Cert2.jpg';
import Cert3 from '../assets/Cert3.jpg';
import Cert4 from '../assets/Cert4.jpg';

const Certificates = () => (
  <section id="certificates">
    <div className="container">
      <h2><span className="underline-first-two">My</span> Certificates</h2>
      <div className="certificates-grid">
        <div className="certificate-card">
          <div className="certificate-preview">
            <img
              src={Cert1}
              alt="Responsive Web Design Certificate"
              className="certificate-img"
            />
            <a href="../assets/Cert1.jpg" target="_blank" rel="noopener noreferrer" className="preview-btn">Preview</a>
          </div>
          <div className="certificate-info">
            <h3>Responsive Web Design</h3>
            <p>freeCodeCamp, 2023</p>
            <p>Completed 300 hours of coursework on HTML and CSS for responsive websites.</p>
          </div>
        </div>
        <div className="certificate-card">
          <div className="certificate-preview">
            <img
              src={Cert2}
              alt="JavaScript Algorithms Certificate"
              className="certificate-img"
            />
            <a href="../assets/Cert2.jpg" target="_blank" rel="noopener noreferrer" className="preview-btn">Preview</a>
          </div>
          <div className="certificate-info">
            <h3>JavaScript Algorithms</h3>
            <p>freeCodeCamp, 2023</p>
            <p>Mastered JavaScript and built projects with algorithms and data structures.</p>
          </div>
        </div>
        <div className="certificate-card">
          <div className="certificate-preview">
            <img
              src={Cert3}
              alt="Front End Development Certificate"
              className="certificate-img"
            />
            <a href="../assets/Cert3.jpg" target="_blank" rel="noopener noreferrer" className="preview-btn">Preview</a>
          </div>
          <div className="certificate-info">
            <h3>Front End Development</h3>
            <p>freeCodeCamp, 2024</p>
            <p>Learned Bootstrap, Sass, and jQuery through hands-on projects.</p>
          </div>
        </div>
        <div className="certificate-card">
          <div className="certificate-preview">
            <img
              src={Cert4}
              alt="Front End Development Certificate"
              className="certificate-img"
            />
            <a href="../assets/Cert4.jpg" target="_blank" rel="noopener noreferrer" className="preview-btn">Preview</a>
          </div>
          <div className="certificate-info">
            <h3>Front End Development</h3>
            <p>freeCodeCamp, 2024</p>
            <p>Learned Bootstrap, Sass, and jQuery through hands-on projects.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Certificates;