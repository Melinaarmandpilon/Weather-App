import { SEARCH_BY_NAME } from "../actions/types";

const initialState = {
  cities: []
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_BY_NAME:
      console.log("action.payload", action.payload);
      return {
        ...state,
        cities: state.cities.concat(action.payload),
      };
    default:
      return state;
  }
}
