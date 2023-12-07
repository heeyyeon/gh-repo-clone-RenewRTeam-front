import React from 'react';
import './DataNavbar.css';
import dataIcon from '../../images/icons/data-black.svg'; 
import pointIcon from '../../images/icons/point-gray.svg'; 
import userIcon from '../../images/icons/user-gray.svg'; 

function NavItem({ icon, label, className }) {
  return (
    <div className={`nav-item ${className}`}>
      {icon && <img src={icon} alt={label} className="nav-icon" />}
      <span>{label}</span>
    </div>
  );
}

function DataNavbar() {
  return (
    <div className="nav-bar">
      <NavItem icon={dataIcon} label="데이터 수집" />
      <NavItem icon={pointIcon} label="잔액" className="text-gray" />
      <NavItem icon={userIcon} label="사용자" className="text-gray" />
    </div>
  );
}

export default DataNavbar;
