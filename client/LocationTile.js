import React from 'react';

const LocationTile = ( {location, openModal} ) => {
  return (
    <div className="location-tile" onClick={()=>{openModal(location)} }>
      {location.name}
      <br/>
      {location.address}
    </div>
  );
};

export default LocationTile;