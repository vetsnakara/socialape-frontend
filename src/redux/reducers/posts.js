import { SET_POSTS, SET_POST_DELETED } from "../actions/posts";
import { ADD_LIKE, REMOVE_LIKE } from "../actions/likes";

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_POSTS:
      return [...state, ...action.payload.posts];
    case SET_POST_DELETED:
      return state.filter(post => post.id !== action.payload.postId);
    case ADD_LIKE:
      return incrementLikeCount(state, action);
    case REMOVE_LIKE:
      return decrementLikeCount(state, action);
    default:
      return state;
  }
};

const incrementLikeCount = (state, action) =>
  state.map(post =>
    post.id === action.payload.postId
      ? { ...post, likeCount: post.likeCount + 1 }
      : post
  );

const decrementLikeCount = (state, action) =>
  state.map(post =>
    post.id === action.payload.postId
      ? { ...post, likeCount: post.likeCount - 1 }
      : post
  );

export default postsReducer;
