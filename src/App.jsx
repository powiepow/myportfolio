import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Blog from './components/Blog.jsx';
import Work from './components/Work.jsx';
import Experience from './components/Experience.jsx';
import Certificates from './components/Certificates.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

const CosmicLoading = () => {
  const particleCount = 12;
  const particles = Array.from({ length: particleCount }, (_, i) => (
    <div
      key={i}
      className="particle"
      style={{
        transform: `rotate(${i * (360 / particleCount)}deg) translateX(80px)`,
        animationDelay: `${i * 0.1}s`,
      }}
    />
  ));

  return (
    <div className="cosmic-loading">
      <div className="orbit">{particles}</div>
      <div className="logo">PT</div>
    </div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const sections = useRef([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      sections.current.forEach((section) => {
        if (section) section.classList.add('visible');
      });
    }, 3000);

    const observers = sections.current.map((section) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      observer.observe(section);
      return observer;
    });

    return () => {
      clearTimeout(timer);
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <CosmicLoading />
      ) : (
        <>
          <Navbar />
          <Home ref={(el) => (sections.current[0] = el)} />
          <About ref={(el) => (sections.current[1] = el)} />
          <Blog ref={(el) => (sections.current[2] = el)} />
          <Work ref={(el) => (sections.current[3] = el)} />
          <Experience ref={(el) => (sections.current[4] = el)} />
          <Certificates ref={(el) => (sections.current[5] = el)} />
          <Contact ref={(el) => (sections.current[6] = el)} />
          <Footer ref={(el) => (sections.current[7] = el)} />
        </>
      )}
    </>
  );
};

export default App;