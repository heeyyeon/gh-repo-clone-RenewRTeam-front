import React from 'react';
import './PointNavbar.css';
import dataIcon from '../../images/icons/data-gray.svg'; 
import pointIcon from '../../images/icons/point-black.svg'; 
import userIcon from '../../images/icons/user-gray.svg'; 

function NavItem({ icon, label, className }) {
  return (
    <div className={`nav-item ${className}`}>
      {icon && <img src={icon} alt={label} className="nav-icon" />}
      <span>{label}</span>
    </div>
  );
}

function PointNavbar() {
  return (
    <div className="nav-bar">
      <NavItem icon={dataIcon} label="데이터 수집" className="text-gray" />
      <NavItem icon={pointIcon} label="잔액" />
      <NavItem icon={userIcon} label="사용자" className="text-gray" />
    </div>
  );
}

export default PointNavbar;
