import React from "react";
import {useState, useEffect} from "react";
import Header from "./Header.js";
import Filters from "./Filters.js";
import LocationsList from "./LocationsList.js";
import LocationModal from "./LocationModal.js";
import axios from "axios";
import './styles.css';


const App = () => {
  const [locations, setLocations] = useState([]);
  console.log(locations);

  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    axios.get('/api/locations')
      .then((response) => {
        setLocations(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column'}}>
      <Header />
      <Filters />
      <LocationsList locations={locations} />

      <button onClick={openModal}>Open Modal</button>

      {showModal && <LocationModal closeModal={closeModal} />}
    </div>
  )
}

export default App;