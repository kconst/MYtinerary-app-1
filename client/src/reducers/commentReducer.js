import { ADD_COMMENT } from "../actions/types";

const initState = {
  comments: []
};

const commentReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        comments: action.payload
      };
    default:
      return state;
  }
};

export default commentReducer;
