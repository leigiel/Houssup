import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import houseIcon from '../../assets/house_icon.png';

// Custom icon for the marker
const customIcon = new L.Icon({
  iconUrl: houseIcon,
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32]
});

const locationCoordinates = {
  'Manhattan, New York': [40.7831, -73.9712],

};

const MapComponent = ({ address, houseTitle }) => {
  const position = locationCoordinates[address] || [40.7831, -73.9712]; 

  return (
    <MapContainer center={position} zoom={13} style={{ height: '300px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          {houseTitle}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
