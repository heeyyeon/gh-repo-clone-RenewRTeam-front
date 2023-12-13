import React from 'react';
import './Modal.css';

function Modal({ onConfirm, onCancel, msg }) {
  return (
    <div className="custom-modal-backdrop">
    <div className="custom-modal-content">
        <p><b>주의!</b></p>
        <p>{msg}</p>
        <button className="cancel-button" onClick={onCancel}>취소</button>
        <button className="confirm-button" onClick={onConfirm}>확인</button>
        
    </div>
    </div>
  );
}

export default Modal;