import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import helloReducer from "./helloReducer";
import itineraryReducer from "./itineraryReducer";
import activityReducer from "./activityReducer";
import commentReducer from "./commentReducer";
import signUpReducer from "./signUpReducer";

const rootReducer = combineReducers({
  cityR: cityReducer,
  helloR: helloReducer,
  itineraryR: itineraryReducer,
  activityR: activityReducer,
  commentR: commentReducer,
  signUpR: signUpReducer
});

export default rootReducer;
