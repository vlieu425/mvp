import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const LocationTile = ({ location, openModal, setLocations, yourReviewsPage }) => {

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    axios.get(`api/favorite/${location.location_id}`)
      .then((response) => {
        setIsFavorite(response.data[0].favorite);
        })
      .catch((error) => {
        console.error('Error fetching favorite status: ', error);
      });
  }, [])


  const handleFavoriteClick = (e) => {
    e.stopPropagation(); //stops modal from opening
    setIsFavorite(!isFavorite);

    axios.put(`/api/favorite/${location.location_id}`)
      .then((response) => {
        console.log(response.data);
        axios.get('/api/locations')
          .then((response) => {
            setLocations(response.data);
          })
      })
      .catch((error) => {
        console.error('Error updating favorite status: ', error);
      });

  };

  return (
    <div className="location-tile" onClick={() => { openModal(location) }}>
      <div className="favorite-icon" onClick={handleFavoriteClick}>
        <i className={isFavorite ? "fas fa-star" : "far fa-star"} style={{ color: isFavorite ? "yellow" : "black" }}></i>
      </div>
      <div className="location-details">
        <span className="location-name">{location.name}</span>
        <span className="location-address">{location.address}</span>
      </div>
    </div>
  );
};

export default LocationTile;