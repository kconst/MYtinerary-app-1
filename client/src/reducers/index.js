import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import helloReducer from "./helloReducer";
import itineraryReducer from "./itineraryReducer";
import activityReducer from "./activityReducer";
import commentReducer from "./commentReducer";

const rootReducer = combineReducers({
  cityR: cityReducer,
  helloR: helloReducer,
  itineraryR: itineraryReducer,
  activityR: activityReducer,
  commentR: commentReducer
});

export default rootReducer;
