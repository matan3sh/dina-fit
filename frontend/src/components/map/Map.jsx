import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import mapStyle from './mapStyle';

const mapContainerStyle = {
  height: '30vh',
  width: '100%'
};
const options = {
  styles: mapStyle,
  disableDefaultUI: true,
  zoomControl: true
};
const center = {
  lat: 31.92933,
  lng: 34.79868
};
const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAxrE8gaOyZoAXyn3XakhdiHzK51tDEP_8'
  });
  if (loadError) return 'Error loading maps';
  if (!isLoaded) return 'Loading Maps';
  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      options={options}
      zoom={13}
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

export default Map;
