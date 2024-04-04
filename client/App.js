import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect } from "react";
import Home from "./Home.js";
import Login from "./Login.js";
import './styles.css';


const App = () => {


  return (
    <div>
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
    </div>



  )
}

export default App;