// describe algo (+ debounce)

import { LIKE, UNLIKE } from "../../actions/likes";
import { ADD_LIKE, REMOVE_LIKE } from "../../actions/likes";

const likesReducer = (state = [], action) => {
  switch (action.type) {
    case LIKE:
    case UNLIKE:
      return [...state, action.payload.postId];
    case ADD_LIKE:
    case REMOVE_LIKE:
      if (state.includes(action.payload.postId)) {
        return state.filter(postId => postId !== action.payload.postId);
      }
      return state;
    default:
      return state;
  }
};

export default likesReducer;
