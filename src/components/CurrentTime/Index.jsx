import React, { useEffect /* , useState */ } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


import { getByCoord } from "../../actions";
import DailyForecast from "../DailyForecast/Index";
import MapView from "../MapView/Index";
import Utils from "../../utils/WeatherIcon";
import pressure from "../../assets/pressure.png";
import humidity from "../../assets/humidity.png";
import visibility from "../../assets/Visibility.png";
import wind from "../../assets/wind.png";
import styles from "./Styles.module.css";

export default function CurrentTime() {
  const cityLocation = useSelector((state) => state.cityLocation);
  console.log("cityLocation", cityLocation);

  const dispatch = useDispatch();

  //ANTES DE RENDIZAR ME PIDE LA LOCALIZACION
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        dispatch(
          getByCoord(position.coords.longitude, position.coords.latitude)
        );
      },
      function (error) {
        console.log(error);
      },
      { enableHighAccuracy: false } //cada vez que pueda va a pedir info desde el GPS, permite una localización más exacta
    );
  }, [dispatch]);

  //HORA ACTUAL
  var dt = new Date();
  var hour = dt.getHours();
  var minute = dt.getMinutes();
  var time =
    hour > 12 ? hour - 12 + ":" + minute + " PM" : hour + ":" + minute + " AM";

  return (
    <section >
      {Object.keys(cityLocation).length === 0 ? (
        <p>City not found</p>
      ) : (
        <div className={styles.container}>
          <div className={styles.currentTime}>
            <h2>{cityLocation.name}</h2>
            <h3>Current time</h3>
            <h5>{time}</h5>
            <div className={styles.currentTemp}>
              <div>
                <Utils
                  icon={cityLocation?.weather[0]?.icon}
                  width="130px"
                  height="130px"
                />
                <h3>{Math.round(cityLocation.main.temp)}°C</h3>
              </div>
              <div>
                <h4>{cityLocation.weather[0].description}</h4>
                <p>Feels like: {cityLocation.main.feels_like}°C</p>
              </div>
            </div>
            <div className={styles.icon}>
              <div className={styles.description}>
                <img src={wind} width="40px" height="40px" alt="not found" />
                <div>
                  <p>Wind</p>
                  <p> {Math.round(cityLocation.wind.speed * 3.6)} Km/h</p>
                </div>
              </div>
              <div className={styles.description}>
                <img
                  src={humidity}
                  width="40px"
                  height="40px"
                  alt="not found"
                />
                <div>
                  <p>Humidity</p>
                  <p>{cityLocation.main.humidity}%</p>
                </div>
              </div>
              <div className={styles.description}>
                <img
                  src={visibility}
                  width="40px"
                  height="40px"
                  alt="not found"
                />
                <div>
                  <p>Visibility</p>
                  <p> {Math.round(cityLocation.visibility / 1000)} Km</p>
                </div>
              </div>
              <div className={styles.description}>
                <img
                  src={pressure}
                  width="40px"
                  height="40px"
                  alt="not found"
                />
                <div>
                  <p>Pressure</p>
                  <p>{cityLocation.main.pressure} mBar</p>
                </div>
              </div>
            </div>
          </div>
          <MapView
            className={styles.mapView}
            lat={cityLocation?.coord?.lat}
            lon={cityLocation?.coord?.lon}
          />
          <div className={styles.containerCards}>
            <h1 className={styles.h1}>Daily Forecast</h1>
            <DailyForecast
              className={styles.cards}
              lat={cityLocation.coord?.lat}
              lon={cityLocation.coord?.lon}
            />
          </div>
        </div>
      )}
    </section>
  );
}
