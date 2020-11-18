import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
// import AppComp from './AppComp';
import App from './App';

ReactDOM.render(
  <Router>
    <App  />
    {/* <AppComp msg='bienercheo' /> */}
  </Router>,
  document.getElementById('root')
);