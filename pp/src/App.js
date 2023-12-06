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
// import Card from './components/Card/Card';
// //import Navbar from './components/Navbar/Navbar';
// import './App.css';

// function App() {
//   return (
//     <div className="app">
//       {/* Card 컴포넌트에 데이터를 전달 */}
//       <Card 
//         image="path_to_image.jpg" 
//         title="카드 제목" 
//         description="여기에 카드 설명을 적습니다."
//         limit="정원"
//       />
//       {/* <Navbar /> */}
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // 'Routes' 추가
// import CardList from './pages/CardList/CardList';
// import Detail from './pages/Detail/Detail';
// import './App.css';

// function App() {
//   const cards = [
//     { image: 'https://images.unsplash.com/photo-1596854372407-baba7fef6e51?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Title 1', description: 'Description 1', limit: 'limit 1' },
//     { image: 'image2.jpg', title: 'Title 2', description: 'Description 2', limit: 'limit 2' },
//     { image: 'image2.jpg', title: 'Title 2', description: 'Description 2', limit: 'limit 2' },
//     { image: 'image2.jpg', title: 'Title 2', description: 'Description 2', limit: 'limit 2' },
//   ];

//   return (
//     <Router>
//       <div className="app">
//         <Routes> {/* 'Routes' 컴포넌트 사용 */}
//           <Route path="/" element={<CardList cards={cards} listTitle="데이터 거래 목록" />} />
//           <Route path="/detail/:id" element={<Detail />} />
//           {/* ... 추가 라우트 ... */}
//         </Routes>
//         {/* BottomBar 컴포넌트 활성화하려면 주석 해제 */}
//         {/* <BottomBar /> */}
//       </div>
//     </Router>
//   );
// }
// export default App;

// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CardList from './pages/CardList/CardList';
import Detail from './pages/Detail/Detail';
// import BottomBar from './components/BottomBar/BottomBar'; // 필요하다면 주석 해제
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
        <Route path="/" element={<CardList listTitle="데이터 수집 목록" />} />
          <Route path="/detail/:id" element={<Detail />} />
          {/* 기타 라우트는 필요에 따라 추가 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

