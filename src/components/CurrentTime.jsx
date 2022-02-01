import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getByCoord } from "../actions";
import DailyForecast from "./DailyForecast";
import Utils from "../utils/WeatherIcon";

export default function CurrentTime({ lon, lat }) {
  // const cityByCoord = useSelector((state) => state.cityByCoord); // ESTADO QUE SE LLENA CUANDO SE BUSCA POR NOMBRE
  const cityLocation = useSelector((state) => state.cityLocation);
  console.log("cityLocation", cityLocation);

  const dispatch = useDispatch();

  // ESTADO LOCAL POR LOCALIZACIÓN
  const [location, setLocation] = useState({
    lon: 0,
    lat: 0,
  });

  //ANTES DE RENDIZAR HOME ME PIDE LA LOCALIZACION
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setLocation({
          lon: position.coords.longitude,
          lat: position.coords.latitude,
        });
      },
      function (error) {
        console.log(error);
      },
      { enableHighAccuracy: true }
    );
    dispatch(getByCoord(location.lon, location.lat));
  }, [dispatch, setLocation, location.lon, location.lat]);

  //HORA ACTUAL
  var dt = new Date();
  var hour = dt.getHours();
  var minute = dt.getMinutes();
  var time =
    hour > 12 ? hour - 12 + ":" + minute + " PM" : hour + ":" + minute + " AM";

  return (
    <div>
      {Object.keys(cityLocation).length === 0 ? (
        <div>
          <p>City not found</p>
        </div>
      ) : (
        <div>
          <p>{cityLocation.name}</p>
          <p>Current time</p>
          <p>{time}</p>
          <Utils icon={cityLocation?.weather[0]?.icon}/>
          {/* <img
            src={
              "http://openweathermap.org/img/wn/" +
              cityLocation?.weather[0]?.icon +
              "@2x.png"
            }
            alt="not found"
          /> */}
          <p>{cityLocation.main.temp}°C</p>
          <h4>{cityLocation.weather[0].description}</h4>
          <p>Feels like: {cityLocation.main.feels_like}°C</p>
          {/* PONER ICONOS */}
          <p>Wind: {Math.round(cityLocation.wind.speed * 3.6)} Km/h</p>
          <p>Humidity: {cityLocation.main.humidity}%</p>
          <p>Visibility: {Math.round(cityLocation.visibility / 1000)} Km</p>
          <p>Pressure:{cityLocation.main.pressure} mBar</p>
          {/* <p>Dew point:{city.main.feels_like}°C</p> */}
        </div>
      )}
      <div>
        <DailyForecast lon={location.lon} lat={location.lat} />
      </div>
    </div>
  );
}
