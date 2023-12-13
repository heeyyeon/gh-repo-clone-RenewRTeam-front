import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'; 
import DATABANK from '../../images/DATABANK.svg';
import BackDataTradeList from '../../components/BackDataTradeList/BackDataTradeList';

function Register() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // 회원가입 처리 로직 (예: 폼 데이터를 서버에 전송)
    // ...

    // 회원가입 처리 후 로그인 페이지로 이동
    navigate('/');
  };

  return (
    <div className="register-container">
      <BackDataTradeList listTitle="" />
      <div className="logo">
      <img src={DATABANK} alt="DATABANK Logo" />
      </div>
       <form className="register-form" onSubmit={handleSubmit}>
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
