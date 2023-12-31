import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupType.css';
import DATABANK from '../../images/DATABANK.svg';
import Messages from '../../images/Messages.svg';
import Profile from '../../images/Profile.svg';
import BackDataTradeList from '../../components/BackDataTradeList/BackDataTradeList';

function SignupType() {
  const [selectedType, setSelectedType] = useState(null);
  const navigate = useNavigate();

  const handleNext = () => {
    if (selectedType) {
      // 선택된 가입 유형을 URL 파라미터로 전달하며 Register 컴포넌트로 이동
      navigate(`/register?mode=${selectedType}`);
    } else {
      alert('가입 유형을 선택해주세요.'); // 가입 유형이 선택되지 않았을 경우 경고
    }
  };

  const handleBack = () => {
    navigate('/'); // 로그인 페이지로 이동
  };

  const selectType = (type) => {
    setSelectedType(type);
  };

  const isSelected = (type) => {
    return selectedType === type;
  };

  return (
    <div className="signup-type-container">
      <BackDataTradeList listTitle="" />
      <div className="signup-type-logo">
        <img src={DATABANK} alt="DATABANK Logo" />
      </div>
      <h2>가입 유형을 선택하세요.</h2>
      <div className="signup-type-options">
        <div 
          className={`signup-type-option ${isSelected('data_collector') ? 'selected' : ''}`}
          onClick={() => selectType('data_collector')}>
          <img src={Messages} alt="Messages" />
          <span>데이터 수집자</span>
        </div>
        <div 
          className={`signup-type-option ${isSelected('data_offer') ? 'selected' : ''}`}
          onClick={() => selectType('data_offer')}>
          <img src={Profile} alt="Profile" />
          <span>데이터 제공자</span>
        </div>
      </div>
      <div className="Next-button">
        <button type="button" onClick={handleNext} style={{ backgroundColor: selectedType ? '#214FC7' : '#A5A5A5' }}>다음</button>
      </div>
      <div className="Back-button">
        <button type="button" onClick={handleBack}>뒤로</button>
      </div>
    </div>
  );
}

export default SignupType;
