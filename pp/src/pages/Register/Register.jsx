import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Register.css'; 
import DATABANK from '../../images/DATABANK.svg';
import BackDataTradeList from '../../components/BackDataTradeList/BackDataTradeList';

function Register() {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [walletAddress, setWalletAddress] = useState('');
  const [mode, setMode] = useState(null); // 초기 mode 상태를 null로 설정

   // URL에서 mode 값을 읽어 상태를 설정하는 useEffect
   useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const modeParam = searchParams.get('mode');
    if (modeParam === "data_collector") {
      console.log("0")
      setMode(0); //데이터 수집자
    } else {
      console.log("1")
      setMode(1); //데이터 제공자
    }
  }, [location]);
  
     const handleSubmit = async (event) => {
    event.preventDefault();

    // 회원가입 API endpoint
    const endpoint = '/member/sign-up'; // 실제 API 엔드포인트로 수정 필요

     // 유효성 검사: 비밀번호 확인이 비밀번호와 일치하는지 확인
     if (password !== confirmPassword) {
      alert('패스워드를 다시 확인해주세요');
      return;
    }
    
    // 회원가입 API 호출
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          name,
          walletAddress,
          mode, // URL에서 가져온 mode 값을 사용
        }),
      });

    // 회원가입 처리 후 로그인 페이지로 이동
    if (response.ok) {
      // 회원가입 성공 처리
      const data = await response.json();
      console.log('회원가입 성공:', data);
      navigate('/'); // 로그인 페이지로 리디렉션
    } else {
      // 서버 에러 처리
      const errorText = await response.text();
      alert(`회원가입 실패: ${errorText}`);
    }
  } catch (error) {
    // 네트워크 에러 처리
    alert('오류가 발생했습니다.');
    console.error('API 호출 중 오류 발생:', error);
  }
};

   // 폼 반환 코드
  return (
    <div className="register-container">
      <BackDataTradeList listTitle="" />
      <div className="logo">
      <img src={DATABANK} alt="DATABANK Logo" />
      </div>
      <form className="register-form" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        required
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm password"
        required
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        required
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Wallet Address"
        required
        value={walletAddress}
        onChange={e => setWalletAddress(e.target.value)}
      />
      <button type="submit">회원가입</button>
      </form>
    </div>
  );
}

export default Register;
