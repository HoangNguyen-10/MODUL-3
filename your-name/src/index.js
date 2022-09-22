import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


const name = 'Hoang Nguyen';
const tuoi=29;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  React.createElement('h1',{style:{textAlign:'center'}},name)
);

const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(
  React.createElement('h1',{style:{textAlign:'center'}},tuoi)
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
