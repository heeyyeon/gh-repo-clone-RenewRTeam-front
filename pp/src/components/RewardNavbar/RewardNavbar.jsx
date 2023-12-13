import React from 'react';
import { Link } from 'react-router-dom';
import './RewardNavbar.css';
import dataIcon from '../../images/icons/data-gray.svg'; 
import pointIcon from '../../images/icons/point-black.svg'; 
import userIcon from '../../images/icons/user-gray.svg'; 

function NavItem({ icon, label, className, to}) {
  return (
    <Link to={to} className={`nav-item ${className}`}>
      {icon && <img src={icon} alt={label} className="nav-icon" />}
      <span>{label}</span>
      </Link>
  );
}

function RewardNavbar() {
  return (
    <div className="nav-bar">
      <NavItem icon={dataIcon} label="데이터 거래" to="/cardList" className="text-gray" />
      <NavItem icon={pointIcon} label="리워드" to="/reward" />
      <NavItem icon={userIcon} label="사용자" to="/user" className="text-gray" />
    </div>
  );
}

export default RewardNavbar;