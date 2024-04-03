import React from 'react';
import LocationTile from './LocationTile.js';

const LocationsList = ( {locations}) => {
  console.log(locations);


  return (
    <div>
      LocationsList
      {locations.map(location => (
        <LocationTile key={location.location_id} location={location} />))}

    </div>
  );
};

export default LocationsList;