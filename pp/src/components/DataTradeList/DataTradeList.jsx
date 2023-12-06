// import React from 'react';
// import './DataTradeList.css'; // 새로운 CSS 파일을 import 합니다.

// function DataTradeList({ listTitle }) {
//   return (
//     <div className="data-trade-list">
//       <h3 className="data-trade-list-title">{listTitle}</h3>
//     </div>
//   );
// }

// export default DataTradeList;

// DataTradeList.js
import React from 'react';
import './DataTradeList.css'; // DataTradeList 스타일시트

function DataTradeList({ listTitle }) {
  return (
    <div className="data-trade-list-container">
      <h3 className="data-trade-list-title">{listTitle}</h3>
    </div>
  );
}

export default DataTradeList;

