import React from 'react';

const About = () => (
  <section id="about">
    <div className="container">
      <div className="about-grid">
        <div className="about-text">
          <h2><span className="underline-first-two">Ab</span><span>out</span> Me</h2>
          <p>
            A frontend developer who enjoys building user-friendly and visually appealing web applications. I’m still learning and improving my skills, but I have experience working with HTML, CSS, JavaScript, and some frontend framework like React Js.
          </p>
          <p>
            I love exploring new technologies and figuring out how to create better user experiences. Right now, I’m focused on improving my understanding of responsive design, performance optimization, and accessibility.
          </p>
          <p>
            I’m always open to learning new things and growing as a developer. Looking forward to working on exciting projects and gaining more experience along the way!
          </p>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn">View CV</a>
        </div>
        <div>
          <ul className="skills-list">
            <li><i className="fab fa-html5"></i> HTML</li>
            <li><i className="fab fa-css3-alt"></i> CSS</li>
            <li><i className="fab fa-bootstrap"></i> Bootstrap</li>
            <li><i className="fas fa-wind"></i> Tailwind</li> {/* Used wind icon */}
            <li><i className="fab fa-js-square"></i> JavaScript</li>
            <li><i className="fas fa-code"></i> jQuery</li> {/* Used code icon */}
            <li><i className="fab fa-react"></i> ReactJS</li>
            <li><i className="fab fa-php"></i> PHP</li>
            <li><i className="fab fa-python"></i> Django</li>
            <li><i className="fas fa-database"></i> MySQL</li>
            <li><i className="fas fa-database"></i> SQL</li>
            <li><i className="fab fa-github"></i> GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default About;
