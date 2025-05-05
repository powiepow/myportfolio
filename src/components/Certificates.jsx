import React, { useState } from 'react';
import Cert1 from '../assets/Cert1.jpg';
import Cert2 from '../assets/Cert2.jpg';
import Cert3 from '../assets/Cert3.jpg';
import Cert4 from '../assets/Cert4.jpg';
import Cert5 from '../assets/Cert5.png';

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="certificates">
      <div className="container">
        <h2><span className="underline-first-two">CE</span>RTIFICATES</h2>
        <div className="certificates-grid">

          <div className="certificate-card">
            <div className="certificate-preview">
              <img src={Cert2} alt="Responsive Web Design Certificate" className="certificate-img" />
              <button onClick={() => openModal(Cert2)} className="preview-btn">
                <i className="fa-solid fa-up-right-from-square"></i>
              </button>
            </div>
            <div className="certificate-info">
              <h3>Responsive Web Design</h3>
              <p>freeCodeCamp, 2023</p>
              <p>Completed 300 hours of coursework on HTML and CSS for responsive websites.</p>
            </div>
          </div>

          <div className="certificate-card">
            <div className="certificate-preview">
              <img src={Cert3} alt="JavaScript Algorithms Certificate" className="certificate-img" />
              <button onClick={() => openModal(Cert3)} className="preview-btn">
                <i className="fa-solid fa-up-right-from-square"></i>
              </button>
            </div>
            <div className="certificate-info">
              <h3>JavaScript Algorithms</h3>
              <p>freeCodeCamp, 2023</p>
              <p>Mastered JavaScript and built projects with algorithms and data structures.</p>
            </div>
          </div>

          <div className="certificate-card">
            <div className="certificate-preview">
              <img src={Cert4} alt="Front End Development Certificate" className="certificate-img" />
              <button onClick={() => openModal(Cert4)} className="preview-btn">
                <i className="fa-solid fa-up-right-from-square"></i>
              </button>
            </div>
            <div className="certificate-info">
              <h3>Front End Development</h3>
              <p>freeCodeCamp, 2024</p>
              <p>Learned Bootstrap, Sass, and jQuery through hands-on projects.</p>
            </div>
          </div>

          <div className="certificate-card">
            <div className="certificate-preview">
              <img src={Cert1} alt="React Development Certificate" className="certificate-img" />
              <button onClick={() => openModal(Cert1)} className="preview-btn">
                <i className="fa-solid fa-up-right-from-square"></i>
              </button>
            </div>
            <div className="certificate-info">
              <h3>React Development</h3>
              <p>freeCodeCamp, 2024</p>
              <p>Built interactive UIs with React, including hooks, state management, and routing.</p>
            </div>
          </div>

          <div className="certificate-card">
            <div className="certificate-preview">
              <img src={Cert5} alt="React Development Certificate" className="certificate-img" />
              <button onClick={() => openModal(Cert5)} className="preview-btn">
                <i className="fa-solid fa-up-right-from-square"></i>
              </button>
            </div>
            <div className="certificate-info">
              <h3>React Development</h3>
              <p>freeCodeCamp, 2024</p>
              <p>Built interactive UIs with React, including hooks, state management, and routing.</p>
            </div>
          </div>

        </div>
      </div>

      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>&times;</button>
            <img src={selectedImage} alt="Full Preview" className="modal-image" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
