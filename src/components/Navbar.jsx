import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo">PT</div>
        <ul className={`nav-list ${isOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#work" onClick={closeMenu}>Projects</a></li>
          <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
          <li><a href="#certificates" onClick={closeMenu}>Certificates</a></li>
          <li><a href="#blog" onClick={closeMenu}>Blog</a></li>
          <li><a href="#contact" className="nav-btn" onClick={closeMenu}>Contact</a></li>
        </ul>
        <div className="burger" onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;