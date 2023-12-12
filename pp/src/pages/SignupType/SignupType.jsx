// import React from 'react';
// import './SignupType.css'; 
// import DATABANK from '../../images/DATABANK.svg';
// import Messages from '../../images/Messages.svg';
// import Profile from '../../images/Profile.svg';

// function SignupType() {
//   return (
//     <div className="signup-type-container">
//       <div className="signup-type-logo">
//         <img src={DATABANK} alt="DATABANK Logo" />
//       </div>
//       <h2>가입 유형을 선택하세요.</h2>
//       <div className="signup-type-options">
//         <div className="signup-type-option">
//           <img src={Messages} alt="Messages" />
//           <span>데이터 수집자</span>
//         </div>
//         <div className="signup-type-option">
//           <img src={Profile} alt="Profile" />
//           <span>데이터 제공자</span>
//         </div>
//       </div>
//       <div className="Next-button">
//         <button type="submit">다음</button>
//       </div>
//       <div className="Back-button">
//         <button type="submit">뒤로</button>
//       </div>
//     </div>
//   );
// }

// export default SignupType;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignupType.css';
import DATABANK from '../../images/DATABANK.svg';
import Messages from '../../images/Messages.svg';
import Profile from '../../images/Profile.svg';

function SignupType() {
  const [selectedType, setSelectedType] = useState('');
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/'); // 로그인 페이지로 이동
  };

  const handleNext = () => {
    navigate('/register'); // Register 컴포넌트로 이동
  };

  const selectType = (type) => {
    setSelectedType(type);
  };

  const isSelected = (type) => {
    return selectedType === type;
  };

  return (
    <div className="signup-type-container">
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
        <button type="submit" onClick={handleNext} style={{ backgroundColor: selectedType ? '#214FC7' : '#A5A5A5' }}>다음</button>
      </div>
      <div className="Back-button">
         <button type="submit" onClick={handleBack}>뒤로</button>
       </div>
    </div>
  );
}

export default SignupType;

  // <div className="Next-button">
  //       <button type="button" onClick={handleNext}>다음</button>
  //     </div>
  //     <div className="Back-button">
  //       <button type="button" onClick={handleBack}>뒤로</button>
  //     </div>