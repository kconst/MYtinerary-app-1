import { GET_ITINERARY } from "./types";
import axios from "axios";

export const getItinerary = (city) => dispatch => {
  // const {city} = this.props.match.params.city
  // console.log(city)
  console.log("inside");
  axios.get(`/api/itineraries/${city}`).then(response => {
    console.log(response);
    dispatch({
      type: GET_ITINERARY,
      payload: response.data
    });
  });
};
