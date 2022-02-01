import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getDailyForecast } from "../actions";
import DailyForecastCard from "./DailyForecastCard";

export default function DailyForecast({ lon, lat }) {
  const dispatch = useDispatch();
  const dailyForecast = useSelector((state) => state.dailyForecast);
  console.log("dailyForecast", dailyForecast);

  useEffect(() => {
    dispatch(getDailyForecast(lon, lat));
  }, [dispatch, lon, lat]);

  return (
    <div>
      <h4>PRONÓSTICO DE 8 DÍA(S)</h4>
      {dailyForecast?.daily?.map((day) => (
        <DailyForecastCard 
        day={day}
        />
      ))}
    </div>
  );
}
