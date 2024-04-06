import React from 'react';
import LocationTile from './LocationTile.js';

const LocationsList = ( {locations, openModal, setLocations, yourReviewsPage} ) => {
  console.log(locations);


  return (
    <div>
      {locations.map(location => (
        <LocationTile key={location.location_id} location={location} openModal={openModal} setLocations={setLocations} yourReviewsPage={yourReviewsPage}/>))}

    </div>
  );
};

export default LocationsList;