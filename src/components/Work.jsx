import React from 'react';

const Work = () => (
  <section id="work">
    <div className="container">
      <h2><span className="underline-first-two">My</span> Projects</h2>
      <div className="work-grid">
        <div className="project-card">
          <div className="project-info">
            <h3>Pokédex Web App</h3>
            <p>Interactive app using PokéAPI, built with HTML, CSS, and JavaScript for Pokémon data and battle simulations.</p>
            <div className="project-links">
              <a href="https://padwatingkasan.github.io/pokedex-app" target="_blank" rel="noopener noreferrer" className="project-link">Preview Project</a>
              <a href="https://github.com/PadwaTingkasan/pokedex-app" target="_blank" rel="noopener noreferrer" className="project-link">Git Repository</a>
            </div>
          </div>
          <img
            src="/assets/pokedex.jpg"
            alt="Pokédex App"
            className="project-img"
          />
        </div>
        <div className="project-card">
          <div className="project-info">
            <h3>Tribute Page</h3>
            <p>Minimalist tribute page for Dr. Norman Borlaug, designed with HTML and CSS.</p>
            <div className="project-links">
              <a href="https://padwatingkasan.github.io/tribute-page" target="_blank" rel="noopener noreferrer" className="project-link">Preview Project</a>
              <a href="https://github.com/PadwaTingkasan/tribute-page" target="_blank" rel="noopener noreferrer" className="project-link">Git Repository</a>
            </div>
          </div>
          <img
            src="/assets/tribute.jpg"
            alt="Tribute Page"
            className="project-img"
          />
        </div>
        <div className="project-card">
          <div className="project-info">
            <h3>E-Commerce Landing Page</h3>
            <p>Responsive e-commerce landing page with CSS animations and clean design.</p>
            <div className="project-links">
              <a href="https://padwatingkasan.github.io/ecommerce-landing" target="_blank" rel="noopener noreferrer" className="project-link">Preview Project</a>
              <a href="https://github.com/PadwaTingkasan/ecommerce-landing" target="_blank" rel="noopener noreferrer" className="project-link">Git Repository</a>
            </div>
          </div>
          <img
            src="/assets/ecommerce.jpg"
            alt="E-Commerce Landing Page"
            className="project-img"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Work;