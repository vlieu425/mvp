import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = ({locations, onMarkerClick}) => {
  const mapStyles = {
    height: "80vh",
    width: "80%"
  };

  const defaultCenter = {
    lat: 37.7650,
    lng: -122.4450
  };

  const handleMarkerClick = (location) => {
    onMarkerClick(location);
    console.log(`User clicked on marker at ${location.lat}, ${location.lng}`);
  };

  return (
    <LoadScript
      googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={13}
        center={defaultCenter}
      >

        {locations.map((location, index) => (
          <Marker
            key={index}
            position={{ lat: location.lat, lng: location.lng }}
            onClick={() => handleMarkerClick(location)}
          />
        ))}


      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
