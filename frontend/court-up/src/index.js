import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import SignUpPage from './pages/SignUp/SignUpPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/signup' element={<SignUpPage />}/>
        <Route path='/login' element={<LoginPage />}/>
        <Route path='/' element={<HomePage />}/>
      </Routes>
    </Router>  
  </React.StrictMode>
);

  