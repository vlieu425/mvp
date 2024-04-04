import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home.js';
import Login from './Login.js';
import Header from './Header.js';
import './styles.css';


const App = () => {


  return (
    <div>
     {/* <Home/>
     <Login/> */}

    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>

</div>

  )
}

export default App;
