import { POST_COMMENT, FETCH_COMMENT } from "../actions/types";

const initState = {
  comment: []
};

const commentReducer = (state = initState, action) => {
  console.log(action.payload);
  switch (action.type) {
    case FETCH_COMMENT:
      return {
        ...state,
        comment: action.payload
      };
    case POST_COMMENT:
      return {
        ...state,
        comment: [action.payload, ...state.comment]
      };

    default:
      return state;
  }
};

export default commentReducer;
