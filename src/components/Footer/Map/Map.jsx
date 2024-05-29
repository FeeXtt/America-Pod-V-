import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const position = [50.4125494825189, 14.903224052960049];

// Fix for default marker icon issue with Webpack

function Map() {
  return (
    <div className="h-56 w-full">
    <MapContainer center={position} zoom={15} className="h-full w-full">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          Lokalizace <br /> Naší restaurace
        </Popup>
      </Marker>
    </MapContainer>
    </div>
  );
}

export default Map;