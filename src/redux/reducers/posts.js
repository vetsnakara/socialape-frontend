import { SET_POSTS } from "../actions/posts";

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_POSTS:
      return [...state, ...action.payload.posts];
    default:
      return state;
  }
};

export default postsReducer;
