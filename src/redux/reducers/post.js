import { POSTS_SET_DATA } from "../actions/post";

const postReducer = (state = [], action) => {
  switch (action.type) {
    case POSTS_SET_DATA:
      return applySetPosts(state, action);
    default:
      return state;
  }
};

const applySetPosts = (state, action) => [...state, ...action.payload.data];

export default postReducer;
