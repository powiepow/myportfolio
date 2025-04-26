import React from 'react';

const Modal = ({ isOpen, onClose, title, description, date, images }) => {
  if (!isOpen) return null;

  return (
    <div className="modal active" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="modal-close" onClick={onClose}><i className="fas fa-times"></i></span>
        <h2 className="modal-title">{title}</h2>
        <p className="modal-description">{description}</p>
        <p className="modal-date">{date}</p>
        <div className="modal-images">
          {images.map((img, index) => (
            <a key={index} href={img.src} target="_blank" rel="noopener noreferrer">
              <img
                src={img.src}
                alt={img.alt}
                className="modal-img"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;