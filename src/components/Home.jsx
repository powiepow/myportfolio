import React from 'react';
import Profile from '../assets/Me.png';

const Home = () => (
  <section id="home">
    <div className="container">
      <div className="hero">
        <div className="hero-content">
          <img
            src={Profile}
            alt="Padwa Tingkasan"
            className="profile-img"
          />
          <div className="hero-text">
            <p className="greeting">Hey there, its me</p>
            <h1>Padwa Tingkasan</h1>
            <p className="description">
              Frontend Developer | Crafting responsive, user-focused websites with HTML, CSS, and JavaScript
            </p>
            <div className="social-icons">
              <a href="https://github.com/powiepow" target="_blank" rel="noopener noreferrer" title="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/padwa-tingkasan-a8710627b/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://web.facebook.com/padwa.tingkasan" target="_blank" rel="noopener noreferrer" title="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/its.pawpatrol" target="_blank" rel="noopener noreferrer" title="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Home;