import React from 'react';
import './Register.css'; 
import DATABANK from '../../images/DATABANK.svg';

function Register() {
  return (
    <div className="register-container">
      <div className="logo">
      <img src={DATABANK} alt="DATABANK Logo" />
      </div>
      <form className="register-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="Confirm password" placeholder="Confirm password" required />
        <input type="Name" placeholder="Name" required />
        <input type="Wallet Address" placeholder="Wallet Address" required />
        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default Register;
