import { GET_ACTIVITY } from "../actions/types";

const initState = {
  activity: []
};

const activityReducer = (state = initState, action) => {
  console.log(action.payload)
  switch (action.type) {
    case GET_ACTIVITY:
      return {
        ...state,
        activity: action.payload
      };
      default:
      return state;
  }
};

export default activityReducer;