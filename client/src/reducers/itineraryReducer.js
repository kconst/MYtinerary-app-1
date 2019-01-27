import { GET_ITINERARY } from "../actions/types";

const initState = {
  itineraries: []
};

const itineraryReducer = (state = initState, actions) => {
  switch (actions.type) {
    case GET_ITINERARY:
      console.log("itinerary reducer");
      return {
        ...state,
        itineraries: actions.payload
      };
    default:
      return state;
  }
};

export default itineraryReducer;
