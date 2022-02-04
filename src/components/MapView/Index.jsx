import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconLocation from "../../assets/icon.svg";

export default function MapView({ lat, lon }) {
  // const position = [lat, lon]
  const [location, setLocation] = useState({
    lat: "",
    lon: "",
  });

  useEffect(() => {
    setLocation({
      lat,
      lon,
    });
    /*  return () => {
     second;
   }; */
  }, [lon, lat]);

  return (
    <section>
      {typeof location.lat === "number" ? (
        <MapContainer
          center={[location.lat, location.lon]}
          zoom={9}
          scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            position={[location.lat, location.lon]}
            icon={L.icon({
              iconUrl: iconLocation,
              iconRetinaUrl: iconLocation,
              iconSize: [40, 30],
            })}
          />
        </MapContainer>
      ) : (
        <span>ads</span>
      )}
    </section>
  );
}
