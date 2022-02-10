import React from "react";
import WeatherIcon from "../../utils/WeatherIcon";
import styles from "./styles.module.css";


export default function DailyForecastCard({ day }) {
  var unixTimestamp = day.dt;
  var date = new Date(unixTimestamp * 1000);
  
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  //getDay() es un entero correspondiente al día de la semana; siendo 0 (Domingo) el primer día
  //getDate() es un número entero, entre 1 y 31, que representa el día del mes para la fecha dada según la hora local
  const weekday = `${week[date.getDay()]} ${date.getDate()}`;

 

  return (
    <div className={styles.card}>
      <h6>{weekday}</h6>
      <div className={styles.iconTemp} >
        <WeatherIcon icon={day?.weather[0]?.icon} width="80px" height="80px" />
        <div className={styles.temp}>
          <h4>{Math.round(day.temp.max)}°C</h4>
          <h4>{Math.round(day.temp.min)}°C</h4>
        </div>
      </div>
      <h4>{day.weather[0].description}</h4>
    </div>
  );
}
