import React from 'react';
import './Modal.css';

function Modal({ onConfirm, onCancel }) {
  return (
    <div className="custom-modal-backdrop">
    <div className="custom-modal-content">
        <p><b>주의!</b></p>
        <p>데이터를 삭제하시겠습니까?</p>
        <button className="cancel-button" onClick={onCancel}>취소</button>
        <button className="confirm-button" onClick={onConfirm}>삭제</button>
        
    </div>
    </div>
  );
}

export default Modal;
