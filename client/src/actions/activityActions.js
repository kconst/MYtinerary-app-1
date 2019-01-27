import { GET_ACTIVITY } from "./types";
import axios from "axios";

export const getActivity = (id) => dispatch => {
  console.log("inside activity");
  let url = `/api/activities/${id}`;
  axios.get(url).then(response =>
    dispatch({
      type: GET_ACTIVITY,
      payload: response.data
    })
  );
};
