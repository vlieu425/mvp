import React from 'react';
import LocationTile from './LocationTile.js';

const LocationsList = ( {locations, openModal} ) => {
  console.log(locations);


  return (
    <div>
      {locations.map(location => (
        <LocationTile key={location.location_id} location={location} openModal={openModal} />))}

    </div>
  );
};

export default LocationsList;