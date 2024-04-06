import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home.js';
import Login from './Login.js';
import Header from './Header.js';
import YourReviews from './YourReviews.js';
import './styles.css';


const App = () => {

  const [yourReviewsPage, setYourReviewsPage] = useState(false);


  return (
    <div>
     {/* <Home/>
     <Login/> */}

    <Router>
      <Header yourReviewsPage={yourReviewsPage} setYourReviewsPage={setYourReviewsPage}/>
      <Routes>
        <Route path="/" element={<Home yourReviewsPage={yourReviewsPage}/>} exact />
        <Route path="/login" element={<Login />} />
        <Route path="/reviews" element={<YourReviews yourReviewsPage={yourReviewsPage}/>} />
      </Routes>
    </Router>

</div>

  )
}

export default App;
