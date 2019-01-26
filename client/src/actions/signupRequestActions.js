import axios from "axios";
import { SIGNUP_REQUEST } from "./types";

export const signUpRequest = userData => dispatch => {
  console.log("inside signup actions");
  axios.post("/api/signUp", userData).then(response =>
    dispatch({
      type: SIGNUP_REQUEST,
      payload: response.data
    })
  );
};
