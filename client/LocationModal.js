import React from 'react';

const LocationModal = ( {location, closeModal}) => {
  return (
    <div className="modal-overlay">
      <div className="location-modal">
        <h2>{location.name}</h2>
        <p>{location.address}</p>
      </div>
      <button onClick={closeModal} >X</button>
    </div>
  );
};

export default LocationModal;