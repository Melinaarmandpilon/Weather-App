import React from "react";

import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconLocation from "../../assets/icon.svg";
import styles from "./Styles.module.css";
// import { useDispatch } from "react-redux";

export default function MapView({ lat, lon }) {
  function ChangeMapView({ coords }) {
    const map = useMap();
    map.setView(coords, map.getZoom());
    return null;
  }

  return (
    <MapContainer
      className={styles.container}
      center={{ lat, lon }}
      zoom={9}
      scrollWheelZoom={false}>
      <ChangeMapView coords={{ lat, lon }} />
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={{ lat, lon }}
        icon={L.icon({
          iconUrl: iconLocation,
          iconRetinaUrl: iconLocation,
          iconSize: [40, 40],
        })}
      />
    </MapContainer>
  );
}
