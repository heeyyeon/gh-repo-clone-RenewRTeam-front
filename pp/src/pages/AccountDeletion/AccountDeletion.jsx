import React, { useState } from 'react';
import BackDataTradeList from '../../components/BackDataTradeList/BackDataTradeList';
import UserNavbar from '../../components/UserNavbar/UserNavbar';
import './AccountDeletion.css'; 

function AccountDeletion() {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsConfirmed(event.target.checked);
  };

  const handleDeletionConfirm = () => {
    if (isConfirmed) {
      // 탈퇴 로직을 수행 -> API 호출 
      console.log('계정 탈퇴가 확인되었습니다.');
    } else {
      alert('탈퇴를 확인해주세요.');
    }
  };

  return (
    <div className="account-deletion-container">
      <BackDataTradeList listTitle="회원 탈퇴" />
      <div className="deletion-text">
        <p>회원 탈퇴 시 다양한 데이터베이스 서비스 사용이 불가능하며 탈퇴 처리됩니다.</p>

        <label>
            <input
            type="checkbox"
            checked={isConfirmed}
            onChange={handleCheckboxChange}
            />
            <span className="agreement">이에 동의합니다.</span>
        </label>

      </div>
      <button onClick={handleDeletionConfirm} className="deletion-button">
        탈퇴
      </button>
      <UserNavbar />
    </div>
  );
}

export default AccountDeletion;
