import React from "react";
import {useState, useEffect} from "react";
import Header from "./Header.js";
import Filters from "./Filters.js";
import LocationsList from "./LocationsList.js";
import LocationModal from "./LocationModal.js";
import MapContainer from "./MapContainer.js";
import axios from "axios";

const Home = ({yourReviewsPage}) => {
  const [reviews, setReviews] = useState([]);

  const [locations, setLocations] = useState([]);
  // console.log(locations);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);

  const [favoriteFilter, setFavoriteFilter] = useState(false);



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

  const filteredLocations = favoriteFilter ? locations.filter(location => location.favorite === true) : locations;


  return (
    <div>
      {/* <Header /> */}
      <Filters setFavoriteFilter={setFavoriteFilter} />
        <div className="main">
          <LocationsList locations={filteredLocations} openModal={openModal} setLocations={setLocations} yourReviewsPage={yourReviewsPage}/>
          <MapContainer locations={filteredLocations} onMarkerClick={openModal}/>
        </div>
      {/* <button onClick={openModal}>Open Modal</button> */}

      {showModal && <LocationModal closeModal={closeModal} location={selectedLocation} yourReviewsPage={yourReviewsPage}/>}
    </div>
  )
}

export default Home;