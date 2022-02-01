import React from "react";
import WeatherIcon from "../utils/WeatherIcon";

export default function DailyForecastCard({ day }) {
  var unixTimestamp = day.dt;
  var date = new Date(unixTimestamp * 1000);
  console.log("date: ", date);
  const week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  //getDay() es un entero correspondiente al día de la semana; siendo 0 (Domingo) el primer día
  //getDate() es un número entero, entre 1 y 31, que representa el día del mes para la fecha dada según la hora local
  const weekday = `${week[date.getDay()]} ${date.getDate()}`;
  return (
    <div>
      <h4>{weekday}</h4>
      <WeatherIcon icon={day?.weather[0]?.icon}/>
      {/* <img
        src={
          "http://openweathermap.org/img/wn/" +
          day?.weather[0]?.icon +
          "@2x.png"
        }
        alt="img not found"
      /> */}
      <h4>{day.weather[0].description}</h4>
      <h4>{day.temp.max}</h4>
      <h4>{day.temp.min}</h4>
    </div>
  );
}
