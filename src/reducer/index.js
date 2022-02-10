import { GET_BY_COORD, GET_DAILY_FORECAST, SEARCH_BY_NAME } from "../actions/types";

const initialState = {
  cityLocation:{},
  dailyForecast:{},
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_BY_NAME:
      return {
        ...state,
        cityLocation: action.payload
      };
      case GET_BY_COORD:
        return{
          ...state,
          cityLocation:action.payload
        }
        case GET_DAILY_FORECAST:
          console.log("action.payload en GET_DAILY_FORECAST", action.payload);
          return{
            ...state,
            dailyForecast:action.payload
          }
    default:
      return state;
  }
}
