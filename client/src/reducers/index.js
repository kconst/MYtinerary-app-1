import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import helloReducer from "./helloReducer";

const rootReducer = combineReducers({
  cityR: cityReducer,
  helloR: helloReducer
});

export default rootReducer;
