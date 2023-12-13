//데이터 제공자의 회원 탈퇴 페이지
import React, { useState } from 'react';
import BackDataTradeList from '../../components/BackDataTradeList/BackDataTradeList';
import UserNavbar2 from '../../components/UserNavbar2/UserNavbar2';
import './OfferAccountDeletion2.css'; 
import { useNavigate } from 'react-router-dom';

function OfferAccountDeletion2() {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const navigate = useNavigate();
  const handleCheckboxChange = (event) => {
    setIsConfirmed(event.target.checked);
  };

  const handleDeletionConfirm = () => {
    if (isConfirmed) {
      // 탈퇴 로직을 수행 -> API 호출 
      console.log('계정 탈퇴가 확인되었습니다.');
      navigate('/'); // 로그인 페이지로 리다이렉트
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
      <UserNavbar2 />
    </div>
  );
}

export default OfferAccountDeletion2;
