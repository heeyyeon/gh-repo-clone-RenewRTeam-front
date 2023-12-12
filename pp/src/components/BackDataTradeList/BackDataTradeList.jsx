import React from 'react';
import { useNavigate } from 'react-router-dom';
import back from '../../images/back.svg';
import './BackDataTradeList.css'; 

function BackDataTradeList({ listTitle }) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // 브라우저 히스토리에서 한 단계 뒤로 이동
  };

  return (
    <div className="data-trade-list-container">
      <img src={back} alt="back Logo" onClick={handleBackClick} />
      <h3 className="data-trade-list-title">{listTitle}</h3>
    </div>
  );
}

export default BackDataTradeList;
