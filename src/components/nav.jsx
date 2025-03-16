import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Initial from "../assets/initial white.webp";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='nav'>
      
      <div className='nav-img'>
        <img src={Initial} alt="Logo" />
      </div>

      <div className="burger-menu" onClick={toggleMenu}>
        <i className="fas fa-bars"></i>
      </div>

      <ul className='desk-ul'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skill">Skill</a></li>
        <li><a href="#work">Work</a></li>
      </ul>
      

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleMenu}>X</button>
        <ul>
          <li><a href="#" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#skill" onClick={toggleMenu}>Skill</a></li>
          <li><a href="#work" onClick={toggleMenu}>Work</a></li>
          <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        </ul>
        <div className='mobile-resume'>
          <a href="">Download resume</a>
        </div>
      </div>

      <div className='resume'>
          <button>Download resume</button>
        </div>
    </nav>
  );
};

export default Nav;

