import React from 'react';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Body from './components/body/index';
import Header from './components/header/Header';
import Footer from './components/footer/index';
import { BackTop } from 'antd';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Header/>
      <Body/>
      <Footer/>
      <BackTop>
        <div className="backTop"><i className="fas fa-arrow-up" style={{fontSize: '25px'}}></i></div>
      </BackTop>
    </Router>
  );
}

export default App;
