import { SEARCH_BY_NAME } from "./types";
import axios from "axios"

const apiKey = process.env.REACT_APP_APIKEY;

export function searchCityByName(input){
    console.log("city_name",input)
    return async function (dispatch){
        try {
            const response= await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`)
           console.log("response.data",response.data)
            return dispatch({
                type:SEARCH_BY_NAME,
                payload:response.data
            })
        } catch (error) {
            alert("City not found")
        }
    }
}
