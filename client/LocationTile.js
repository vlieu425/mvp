import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const LocationTile = ({ location, openModal }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = (e) => {
    e.stopPropagation(); //stops modal from opening
    setIsFavorite(!isFavorite);

    axios.put(`/api/favorite/${location.location_id}`)
      .then((response) => {
        console.log(response.data);
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