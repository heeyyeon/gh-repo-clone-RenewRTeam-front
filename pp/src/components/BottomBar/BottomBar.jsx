import React from "react";
import { Link } from 'react-router-dom'
import './BottomBar.css'
import dataIcon from '../../images/icons/data-icon.svg';
import rewardIcon from '../../images/icons/reward-icon.svg';
import userIcon from '../../images/icons/user-icon.svg';

const BottomNav = () => {
  return (
    <nav className="wrapper"> {/* 하단 네비게이션 최상위 태그 */}
      <Link to={'/'}>데이터거래</Link> {/* 네비게이션을 구성하고 있는 하나의 버튼 */}
      <Link to={'/'}>포인트</Link>
      <Link to={'/'}>사용자</Link>
    </nav>
  );
};

export default BottomNav;

