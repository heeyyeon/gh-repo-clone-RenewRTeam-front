// import React, { useState } from 'react';
// import './Login.css'; 
// import DATABANK from '../../images/DATABANK.svg';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     // API endpoint, 예를 들어 '/api/login'은 실제 서버 주소로 대체해야 합니다.
//     const endpoint = 'YOUR_API_ENDPOINT'; 

//     try {
//       const response = await fetch(endpoint, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         console.log('로그인 성공:', data);
//         // 로그인 성공 후 처리, 예를 들어 토큰을 저장하거나 다른 페이지로 리디렉션
//       } else {
//         console.error('로그인 실패:', response);
//         // 오류 처리, 예를 들어 사용자에게 오류 메시지 표시
//       }
//     } catch (error) {
//       console.error('API 호출 중 오류 발생:', error);
//       // 네트워크 오류 처리
//     }
//   };

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Link 컴포넌트 임포트
import './Login.css'; 
import DATABANK from '../../images/DATABANK.svg';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleSubmit = async (event) => {
    event.preventDefault();
    const endpoint = "/member/sign-in";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        window.sessionStorage.setItem("token", data.data.accessToken);
        if (data.data.mode === 0) {
          navigate("/CardListCollector");
        } else if (data.data.mode === 1) {
          navigate("/CardList");
        }
      } else {
        console.error("로그인 실패:", response);
      }
    } catch (error) {
      console.error("API 호출 중 오류 발생:", error);
    }
  };
  
  return (
    <div className="login-container">
      <div className="logo">
        <img src={DATABANK} alt="DATABANK Logo" />
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
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
        <button type="submit">로그인</button>
        <div className="login-actions">
          {/* Link 컴포넌트를 사용하여 회원가입 페이지로 이동 */}
          <Link to="/SignupType" style={{ textDecoration: 'none', color: '#214FC7'}}><span>계정이 없으신가요? 회원가입하기</span></Link>
        </div>
      </form> 
    </div>
  );
}

export default Login;