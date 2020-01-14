import { SET_POSTS } from "../types/post";

const initialState = [];

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      return [...action.posts];
    default:
      return state;
  }
};

export default postReducer;
