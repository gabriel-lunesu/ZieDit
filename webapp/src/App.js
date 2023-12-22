import React, { } from 'react';
import './App.css';
  
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
  
import LandingPage from "./pages/LandingPage";
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Dashboard from './pages/Dashboard';
 
function App() {
  return (
    <div className="vh-100 gradient-custom">
    <h1 className="page-header text-center font-bold title text-white ">ZieDit</h1>

    <div className="container content-center">
   
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
    </div>
  );
}
   
export default App;