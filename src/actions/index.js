import { GET_BY_COORD, GET_DAILY_FORECAST, SEARCH_BY_NAME } from "./types";
import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
console.log("apiKey", apiKey);

export function searchCityByName(name) {
  // console.log("cityname", name);
  return async function (dispatch) {
    try {
      let response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}&units=metric&lang=sp,es`
      );
      // console.log("response.data", response.data);
      return dispatch({
        type: SEARCH_BY_NAME,
        payload: response.data,
      });
    } catch (error) {
      alert("City not found");
    }
  };
}

//Para obtener pronostico actual con la geolocalización
export function getByCoord (lon, lat){
  return async function (dispatch){
    try {
      // const response= await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`)
      const response= await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=sp`)
      console.log("response.data", response.data);
      return dispatch({
        type:GET_BY_COORD,
        payload:response.data
      })
    } catch (error) {
      alert("Location not found")
    }
  }
}

//Para obtener pronostico por 7 días
export function getDailyForecast (lon, lat){
  return async function (dispatch){
    try {
    const response= await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric&lang=sp`)
      console.log("response.data en getCityByCoord", response.data);
      return dispatch({
        type:GET_DAILY_FORECAST,
        payload:response.data
      })
    } catch (error) {
      console.log("error en getCityByCoord",error)
      // alert("Current weather data not found")
    }
  }
}