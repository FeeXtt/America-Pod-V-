import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const position = [50.4125494825189, 14.903224052960049];

function Map(props) {
  return (
    <div className={`${props.h } w-full`}>
    <MapContainer center={position} zoom={15} className="h-full w-full z-10">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
        Komenského náměstí 61 <br /> 29301 Mladá Boleslav
        </Popup>
      </Marker>
    </MapContainer>
    </div>
  );
}

export default Map;