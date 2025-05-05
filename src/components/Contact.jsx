import React from 'react';

const Contact = () => (
  <section id="contact">
    <div className="container">
      <h2><span className="underline-first-two">GE</span><span>T</span> IN TOUCH</h2>
      <div className="contact-info-wrapper">
        <div className="contact-info">
          <p>Have a project idea or want to collaborate? Reach out to me!</p>
          <div className="contact-info-grid">
            <div className="contact-info-item">
              <i className="fas fa-envelope"></i>
              <span > Email: padwa.tingkasan@example.com</span>
            </div>
            <div className="contact-info-item">
              <i className="fas fa-phone"></i>
              <span>Phone: +63-975-478-6803</span>
            </div>
            <div className="contact-info-item">
              <i className="fab fa-github"></i>
              <span>
                GitHub: 
                <a href="https://github.com/PadwaTingkasan" target="_blank" rel="noopener noreferrer"> powiepow</a>
              </span>
            </div>
            <div className="contact-info-item">
              <i className="fab fa-linkedin"></i>
              <span>
                LinkedIn: 
                <a href="https://www.linkedin.com/in/padwa-tingkasan-a8710627b/" target="_blank" rel="noopener noreferrer"> Padwa Tingkasan</a>
              </span>
            </div>
            <div className="contact-info-item">
              <i className="fab fa-twitter"></i>
              <span>
                Twitter: 
                <a href="https://twitter.com/PadwaDev" target="_blank" rel="noopener noreferrer"> itspowpatrol</a>
              </span>
            </div>
            <div className="contact-info-item">
              <i className="fab fa-instagram"></i>
              <span>
                Instagram: 
                <a href="https://www.instagram.com/its.pawpatrol/" target="_blank" rel="noopener noreferrer"> its.powpatrol</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;