import React from 'react';

const Alert = ({ type, message, onClose }) => {
  return (
    <div className={`alert ${type}`}>
      <span className="alert-message">{message}</span>
      <button className="close-btn" onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

export default Alert;
