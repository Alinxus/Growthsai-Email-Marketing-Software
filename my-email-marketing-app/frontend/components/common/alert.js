// frontend/components/Alert.js
import React from 'react';

const Alert = ({ type, message, onClose }) => {
  return (
    <div className={`alert ${type}`}>
      <p>{message}</p>
      <button className="close-button" onClick={onClose}>
        <span>&times;</span>
      </button>
    </div>
  );
};

export default Alert;
