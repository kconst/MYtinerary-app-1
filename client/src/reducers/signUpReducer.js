import { SIGNUP_REQUEST } from "../actions/types";

const initState = {
  fields: {}
};

const signUpReducer = (state = initState, action) => {
 
  console.log(action.payload);
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        fields: action.payload
      };
    default:
      return state;
  }
};

export default signUpReducer;
