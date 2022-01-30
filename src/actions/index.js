import { SEARCH_BY_NAME } from "./types";
import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
console.log("apiKey", apiKey);

export function searchCityByName(name) {
  console.log("cityname", name);
  return async function (dispatch) {
    try {
      let response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}&units=metric`
      );
      console.log("response.data", response.data);
      return dispatch({
        type: SEARCH_BY_NAME,
        payload: response.data,
      });
    } catch (error) {
      alert("City not found");
    }
  };
}
