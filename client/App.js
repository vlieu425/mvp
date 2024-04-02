import React from "react";
import {useState, useEffect} from "react";
import Header from "./Header.js";
import Filters from "./Filters.js";
import LocationsList from "./LocationsList.js";
import axios from "axios";


const App = () => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column'}}>
       <Header />
       <Filters />
       <LocationsList />





    </div>
  )
}

export default App;