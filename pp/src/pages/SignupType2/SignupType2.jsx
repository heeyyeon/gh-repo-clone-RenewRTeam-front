import React from 'react';
import './SignupType2.css'; 
import DATABANK from '../../images/DATABANK.svg';
import Messages from '../../images/Messages.svg';
import Profile from '../../images/Profile.svg';

function SignupType() {
  return (
    <div className="signup-type-container">
      <div className="signup-type-logo">
        <img src={DATABANK} alt="DATABANK Logo" />
      </div>
      <h2>가입 유형을 선택하세요.</h2>
      <div className="signup-type-options">
        <div className="signup-type-option1">
          <img src={Messages} alt="Messages" />
          <span>데이터 수집자</span>
        </div>
        <div className="signup-type-option">
          <img src={Profile} alt="Profile" />
          <span>데이터 제공자</span>
        </div>
      </div>
      <div className="Next-button">
        <button type="submit">다음</button>
      </div>
      <div className="Back-button">
        <button type="submit">뒤로</button>
      </div>
    </div>
  );
}

export default SignupType;
