import React from 'react';
import { Link } from 'react-router-dom';
import './UserNavbar2.css';
import dataIcon from '../../images/icons/data-gray.svg'; 
import pointIcon from '../../images/icons/point-gray.svg'; 
import userIcon from '../../images/icons/user-black.svg'; 

function NavItem({ icon, label, className, to }) {
  return (
    <Link to={to} className={`nav-item ${className}`}>
      {icon && <img src={icon} alt={label} className="nav-icon" />}
      <span>{label}</span>
      </Link>
  );
}

function UserNavbar() {
  return (
    <div className="nav-bar">
      <NavItem icon={dataIcon} label="데이터 거래" to="/cardList" className="text-gray" />
      <NavItem icon={pointIcon} label="리워드" to="/reward" className="text-gray" />
      <NavItem icon={userIcon} label="사용자" to="/user" />
    </div>
  );
}

export default UserNavbar;