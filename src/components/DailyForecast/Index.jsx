import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-elastic-carousel';

import { getDailyForecast } from "../../actions";
import DailyForecastCard from "../DailyForecastCard/Index";
import styles from "./Styles.module.css";

export default function DailyForecast({ lon, lat }) {
  const dispatch = useDispatch();
  const dailyForecast = useSelector((state) => state.dailyForecast);
  console.log("dailyForecast", dailyForecast);

  useEffect(() => {
    dispatch(getDailyForecast(lon, lat));
  }, [dispatch, lon, lat]);
  
  const breakPoints = [
    { width: 1, itemsToShow: 1/* , itemsToScroll: 1 */ },
    { width: 400, itemsToShow: 2/* , itemsToScroll: 2 */ },
    { width: 700, itemsToShow: 3 },
    { width: 1000, itemsToShow: 5 },
    { width: 1200, itemsToShow: 8 }
  ]

  

  return (
    <div>
      <h4>8-DAY(S) FORECAST</h4>
      <div className={styles.cards}>
        <Carousel breakPoints={breakPoints}>
          {dailyForecast?.daily?.map((day, index) => (
            <DailyForecastCard key={index} day={day} />
            ))}
        </Carousel>
      </div>
    </div>
  );
}
