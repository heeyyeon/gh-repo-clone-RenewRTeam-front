import React from 'react';
import './UserNavbar.css';
import dataIcon from '../../images/icons/data-gray.svg'; 
import pointIcon from '../../images/icons/point-gray.svg'; 
import userIcon from '../../images/icons/user-black.svg'; 

function NavItem({ icon, label, className }) {
  return (
    <div className={`nav-item ${className}`}>
      {icon && <img src={icon} alt={label} className="nav-icon" />}
      <span>{label}</span>
    </div>
  );
}

function UserNavbar() {
  return (
    <div className="nav-bar">
      <NavItem icon={dataIcon} label="데이터 거래" className="text-gray" />
      <NavItem icon={pointIcon} label="잔액" className="text-gray" />
      <NavItem icon={userIcon} label="사용자" />
    </div>
  );
}

export default UserNavbar;
