// import React from 'react';
// // import ReactDOM from 'react-dom';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import CardList from "./pages/CardList/CardList";

// import App from './App';
// import reportWebVitals from './reportWebVitals';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// import CardList from "./pages/CardList/CardList";
//  ReactDOM.render(
//  <React.StrictMode>
//  <CardList />
//  </React.StrictMode>,
//  document.getElementById('root')
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <CardList />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App'; // App 컴포넌트 임포트 (배포할 때 주석 풀기)
import Delete from './pages/Delete/Delete';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Delete /> 
  </React.StrictMode>
);
