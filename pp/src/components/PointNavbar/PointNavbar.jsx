import React from 'react';
import './PointNavbar.css';
import { Link } from 'react-router-dom';
import dataIcon from '../../images/icons/data-gray.svg'; 
import pointIcon from '../../images/icons/point-black.svg'; 
import userIcon from '../../images/icons/user-gray.svg'; 

function NavItem({ icon, label, className, to }) {
  return (
    <div className={`nav-item ${className}`}>
      {icon && <img src={icon} alt={label} className="nav-icon" />}
      <Link to={to}>
        <span>{label}</span>
      </Link>
    </div>
  );
}

function PointNavbar() {
  return (
    <div className="nav-bar">
      <NavItem icon={dataIcon} label="데이터 수집" className="text-gray" to="/CardListCollector" />
      <NavItem icon={pointIcon} label="잔액" to="/Reward2" />
      <NavItem icon={userIcon} label="사용자" className="text-gray" to="/User2" />
    </div>
  );
}

export default PointNavbar;