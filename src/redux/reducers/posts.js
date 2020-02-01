import { SET_POSTS, SET_POST_DELETED, SET_NEW_POST } from "../actions/posts";
import { ADD_LIKE, REMOVE_LIKE } from "../actions/likes";

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_POSTS:
      return setPosts(state, action);
    case SET_NEW_POST:
      return setNewPost(state, action);
    case SET_POST_DELETED:
      return deletePost(state, action);
    case ADD_LIKE:
      return incrementLikeCount(state, action);
    case REMOVE_LIKE:
      return decrementLikeCount(state, action);
    default:
      return state;
  }
};

const setPosts = (state, action) => [...state, ...action.payload.posts];

const setNewPost = (state, action) => [action.payload.post, ...state];

const deletePost = (state, action) =>
  state.filter(post => post.id !== action.payload.postId);

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
