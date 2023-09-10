// frontend/components/Modal.js
import React, { useEffect } from 'react';

const Modal = ({ isOpen, onClose, title, children }) => {
  // Close the modal when the "Escape" key is pressed
  const handleEscapeKey = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    // Attach an event listener for the "Escape" key when the modal is open
    if (isOpen) {
      window.addEventListener('keydown', handleEscapeKey);
    }

    // Clean up the event listener when the modal is closed
    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  const handleModalClick = (e) => {
    // Close the modal when users click outside the modal content
    if (e.target.classList.contains('modal-overlay')) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={handleModalClick}>
      <div className="modal">
        <div className="modal-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose}>
            <span>&times;</span>
          </button>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
