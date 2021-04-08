import React from 'react';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Body from './components/body/account/index'
import Header from './components/header/Header'

const App = () => {
  return (
    <>
      <Header/>
      <Body/>
    </>
  );
}

export default App;
