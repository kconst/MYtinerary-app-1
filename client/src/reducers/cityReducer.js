import { GET_CITIES } from "../actions/types";

const initState = {
  cities: []
};

const cityReducer = (state = initState, action) => {
  console.log(action.payload)

  switch (action.type) {
    case GET_CITIES:
      // console.log("reducer working");
      return {
        ...state,
        cities: action.payload
      };
    default:
      return state;
  }
};

export default cityReducer;
