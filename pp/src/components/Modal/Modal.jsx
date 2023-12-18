import React from 'react';
import './Modal.css';

function Modal({ onConfirm, onCancel, msg, text1, text2 }) {
  return (
    <div className="custom-modal-backdrop">
    <div className="custom-modal-content">
        <p>{msg}</p>
        <button className="cancel-button" onClick={onCancel}>{text1}</button>
        <button className="confirm-button" onClick={onConfirm}>{text2}</button>
        
    </div>
    </div>
  );
}

export default Modal;