import React from 'react';
import './DataNavbar.css';
import { Link } from 'react-router-dom';
import dataIcon from '../../images/icons/data-black.svg'; 
import pointIcon from '../../images/icons/point-gray.svg'; 
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

function DataNavbar() {
  return (
    <div className="nav-bar">
      <NavItem icon={dataIcon} label="데이터 거래" to="/CardListCollector" />
      <NavItem icon={pointIcon} label="잔액" className="text-gray" to="/Reward2" />
      <NavItem icon={userIcon} label="사용자" className="text-gray" to="/User2" />
    </div>
  );
}

export default DataNavbar;