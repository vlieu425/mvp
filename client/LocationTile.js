import React from 'react';

const LocationTile = ({location}) => {
  return (
    <div className="location-tile">
      {location.name}
      <br/>
      {location.address}
    </div>
  );
};

export default LocationTile;