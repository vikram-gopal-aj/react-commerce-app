import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./js/header";
import Footer from "./js/footer";
import "slick-carousel/slick/slick.css"; 
import "./scss/styles.css";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
