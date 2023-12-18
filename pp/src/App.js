// // import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// // export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import AccountDeletion from './pages/AccountDeletion/AccountDeletion';
// import CardListCollector from './pages/CardListCollector/CardListCollector';
// import CardListCollector2 from './pages/CardListCollector2/CardListCollector2';
// import CardListTag from './pages/CardListTag/CardListTag';
// import DataSubmission from './pages/DataSubmission/DataSubmission';
// import DataSubmissionForm from './pages/DataSubmissionForm/DataSubmissionForm';
// import DetailCollector from './pages/DetailCollector/DetailCollector';
// import Login from './pages/Login/Login';
// import Reward from './pages/Reward/Reward';
// import Reward2 from './pages/Reward2/Reward2';
// import RewardDeposit from './pages/RewardDeposit/RewardDeposit';
// import RewardSend from './pages/RewardSend/RewardSend';
// import SendSuccess from './pages/SendSuccess/SendSuccess';
// import SignupType from './pages/SignupType/SignupType';
// import User from './pages/User/User';
// import User2 from './pages/User2/User2';

// import CardList from './pages/CardList/CardList';
// import Detail from './pages/Detail/Detail';
// import './App.css';

// function App() {
//   return (
//     <Router>
//       <div className="app">
//         <Routes>
//           <Route path="/" element={<CardList />} />
//           <Route path="/detail/:id" element={<Detail />} />
//           {/* 기타 라우트는 필요에 따라 추가 */}
//         </Routes>
//       </div>
//     </Router>

//   );
// }

// export default App;

import React from 'react';
import CardList from './pages/CardList/CardList';
import Detail from './pages/Detail/Detail';
import Delete from './pages/Delete/Delete';
import AccountDeletion from './pages/AccountDeletion/AccountDeletion';
import OfferAccountDeletion2 from './pages/OfferAccountDeletion2/OfferAccountDeletion2';
import CardListCollector from './pages/CardListCollector/CardListCollector';
import CardListCollector2 from './pages/CardListCollector2/CardListCollector2';
import CardListTag from './pages/CardListTag/CardListTag';
import DataSubmission from './pages/DataSubmission/DataSubmission';
import DataSubmissionForm from './pages/DataSubmissionForm/DataSubmissionForm';
import DetailCollector from './pages/DetailCollector/DetailCollector';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Reward from './pages/Reward/Reward';
import Reward2 from './pages/Reward2/Reward2';
import RewardDeposit from './pages/RewardDeposit/RewardDeposit';
import RewardSend from './pages/RewardSend/RewardSend';
import SendSuccess from './pages/SendSuccess/SendSuccess';
import SignupType from './pages/SignupType/SignupType';
import User from './pages/User/User';
import User2 from './pages/User2/User2';
import DepositSuccess from './pages/DepositSuccess/DepositSuccess';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Routes>
        {/* 회원 관리 */}
        <Route path="/" element={<Login />} />
        <Route path="/SignupType" element={<SignupType />} /> {/* 회원가입 유형 선택 페이지 */}
        <Route path="/register" element={<Register />} /> {/* 회원가입 페이지 */}
         {/* 데이터 제공 관리 */}
        <Route path="/CardList" element={<CardList />} /> {/*데이터 제공자 메인 페이지*/}
        <Route path="/CardListCollector" element={<CardListCollector />} />  {/*데이터 수집자 메인 페이지*/}
        <Route path="/detail/:id" element={<Detail />} /> {/*데이터 제공자 메인 페이지에서 상세 페이지*/}
        <Route path="/DataSubmission/:id" element={<DataSubmission />} /> {/*데이터 제공글 작성*/}
        <Route path="/Reward" element={<Reward />} /> {/*리워드 페이지*/}
        <Route path="/RewardSend" element={<RewardSend />} /> {/*리워드 이체 페이지*/}
        <Route path="/SendSuccess" element={<SendSuccess />} /> {/*리워드 이체 성공 페이지*/}
        <Route path="/User" element={<User />} /> {/*데이터 제공자 전용 사용자 페이지*/}
        <Route path="/CardListTag" element={<CardListTag />} /> {/*내가 쓴 글(내가 작성한 제공 데이터) 페이지*/}
        <Route path="/delete/:id" element={<Delete />} /> {/*내가 쓴 글(내가 작성한 제공 데이터) 삭제 페이지*/}
        <Route path="/AccountDeletion" element={<AccountDeletion />} /> {/*회원 탈퇴 페이지*/}
        {/* 데이터 수집 관리 */}
        {/* <Route path='/CardListCollector' element={<CardListCollector listTitle={"데이터 수집 목록"} />} /> */}
        <Route path='/DataSubmissionForm' element={<DataSubmissionForm />} />
        <Route path='/DetailCollector/:id' element={<DetailCollector />} />
        <Route path='/CardListCollector2/:id' element={<CardListCollector2 />} />
        <Route path='/Reward2' element={<Reward2 />} />
        <Route path='/User2' element={<User2 />} />
        <Route path='/RewardDeposit' element={<RewardDeposit />} />
        <Route path='/DepositSuccess' element={<DepositSuccess />} /> 
        <Route path='/AccountDeletion' element={<AccountDeletion />} /> {/*데이터 수집자 회원 탈퇴 페이지*/}
        <Route path='/OfferAccountDeletion2' element={<OfferAccountDeletion2 />} /> {/*데이터 제공자 회원 탈퇴 페이지*/}
        {/* <Route path='/Login' element={<Login />} /> */}
      </Routes>
    </div>
  );
}

export default App;


