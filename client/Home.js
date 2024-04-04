import React from "react";
import {useState, useEffect} from "react";
import Header from "./Header.js";
import Filters from "./Filters.js";
import LocationsList from "./LocationsList.js";
import LocationModal from "./LocationModal.js";
import MapContainer from "./MapContainer.js";
import axios from "axios";

const Home = () => {
  const [locations, setLocations] = useState([]);
  console.log(locations);

  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);


  const openModal = (location) => {
    setSelectedLocation(location);
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
    <div>
      <Header />
      <Filters />
        <div className="main">
          <LocationsList locations={locations} openModal={openModal} />
          <MapContainer locations={locations} onMarkerClick={openModal}/>
        </div>
      {/* <button onClick={openModal}>Open Modal</button> */}

      {showModal && <LocationModal closeModal={closeModal} location={selectedLocation} />}
    </div>
  )
}

export default Home;