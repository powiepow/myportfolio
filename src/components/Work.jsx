import React from 'react';
import projec1 from '../assets/project1.jpg';
import projec2 from '../assets/project2.jpg';
import projec3 from '../assets/project3.jpg';
import projec4 from '../assets/project4.jpg';

const Work = () => (
  <section id="work">
    <div className="container">
      <h2><span className="underline-first-two">RE</span><span>CENT</span> PROJECTS</h2>
      <div className="work-grid">
        <div className="project-card">
          <div className="project-info">
            <h3>To-DO Hub</h3>
            <p>A simple and clean task manager that lets users add, track, and organize their daily to-dos efficiently.</p>
            <div className="project-links">
              <a href="https://todo-paw.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-link" id='view-project'> <i className="fa-solid fa-up-right-from-square"></i>Live demo</a>
              <a href="https://github.com/powiepow/Todo.git" target="_blank" rel="noopener noreferrer" className="project-link"><i className="fab fa-github"></i>Github</a>
            </div>
          </div>
          <img
            src={projec1}
            className="project-img"
          />
        </div>
        <div className="project-card">
          <div className="project-info">
            <h3>PokéAPI</h3>
            <p>A dynamic Pokédex app that lets users build a team of up to six Pokémon, simulate battles, mark favorites, and view battle history—all powered by the PokéAPI.</p>
            <div className="project-links">
              <a href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:425a4a2b-6de4-436d-8a6c-cbd26f121786" target="_blank" rel="noopener noreferrer" className="project-link" id='view-project'> <i className="fa-solid fa-up-right-from-square"></i>Preview</a>
              <a href="https://github.com/powiepow/pokeapi.git" target="_blank" rel="noopener noreferrer" className="project-link"><i className="fab fa-github"></i>Github</a>
            </div>
          </div>
          <img
            src={projec2}
            className="project-img"
          />
        </div>
        <div className="project-card">
          <div className="project-info">
            <h3>PHYTOSENSE: Crop Disease Diagnostic Platform</h3>
            <p>Smart crop health monitoring system that uses CNN and TensorFlow Js to detect crop diseases through real-time image analysis. Users can scan or upload leaf images to receive instant diagnoses, including disease names, causes, treatments, prevention tips, and confidence levels. </p>
            <div className="project-links">
              <a href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:4e291402-6f9b-4b16-8a05-4f909ca5c28a" target="_blank" rel="noopener noreferrer" className="project-link" id='view-project'> <i className="fa-solid fa-up-right-from-square"></i>Preview</a>
              <a href="https://github.com/powiepow/Phytosense.git" target="_blank" rel="noopener noreferrer" className="project-link"><i className="fab fa-github"></i>Github</a>
            </div>
          </div>
          <img
            src={projec4}
            className="project-img"
          />
        </div>
        <div className="project-card">
          <div className="project-info">
            <h3>Medical Equipment Tracker</h3>
            <p>Medequip is a PHP-based system for the College of Medicine that manages equipment inventory, tracks usage and maintenance, and ensures organized asset handling.</p>
            <div className="project-links">
              <a href="https://acrobat.adobe.com/id/urn:aaid:sc:AP:6598820f-391b-47bd-bddb-37dfb03f226f" target="_blank" rel="noopener noreferrer" className="project-link" id='view-project'> <i className="fa-solid fa-up-right-from-square"></i>Preview</a>
              <a href="https://github.com/powiepow/WebCraft-main.git" target="_blank" rel="noopener noreferrer" className="project-link"><i className="fab fa-github"></i>Github</a>
            </div>
          </div>
          <img
            src={projec3}
            className="project-img"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Work;