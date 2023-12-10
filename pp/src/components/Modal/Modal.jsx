import React from 'react';

function Modal({ onConfirm, onCancel }) {
  return (
    <div className="custom-modal-backdrop">
    <div className="custom-modal-content">
        <p>정말로 이 사진을 삭제하시겠습니까?</p>
        <button className="confirm-button" onClick={onConfirm}>확인</button>
        <button className="cancel-button" onClick={onCancel}>취소</button>
    </div>
    </div>
  );
}

export default Modal;
