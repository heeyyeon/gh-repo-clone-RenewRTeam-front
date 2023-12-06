import React from 'react';
import './Login.css'; 
import DATABANK from '../../images/DATABANK.svg';

function Login() {
  return (
    <div className="login-container">
      <div className="logo">
      <img src={DATABANK} alt="DATABANK Logo" />
      </div>
      <form className="login-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">로그인</button>
        <div className="login-actions">
          <span>계정이 없으신가요? 회원가입하기</span>
        </div>
      </form>
    </div>
  );
}

export default Login;
