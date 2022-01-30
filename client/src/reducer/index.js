import { SEARCH_BY_NAME } from "../actions/types";


const initialState = {
  city: {},
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_BY_NAME:
      return {
        ...state,
        city: action.payload,
      };
    default:
      return state;
  }
}
