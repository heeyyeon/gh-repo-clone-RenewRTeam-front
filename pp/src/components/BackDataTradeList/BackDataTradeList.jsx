import React from 'react';
import back from '../../images/back.svg';
import './BackDataTradeList.css'; 

function BackDataTradeList({ listTitle }) {
  return (
    <div className="data-trade-list-container">
      <img src={back} alt="back Logo" />
      <h3 className="data-trade-list-title">{listTitle}</h3>
    </div>
  );
}

export default BackDataTradeList;