// scope name
const scope = "posts";

// action types
export const FETCH_POSTS = `[${scope}] FETCH_POSTS`;
export const SET_POSTS = `[${scope}] SET_POSTS`;
export const DELETE_POST = `[${scope}] DELETE_POSTS`;
export const SET_POST_DELETED = `[${scope}] SET_POST_DELETED`;

// action creators
export const fetchPosts = () => ({
  type: FETCH_POSTS
});

export const setPosts = posts => ({
  type: SET_POSTS,
  payload: { posts }
});

export const deletePost = postId => ({
  type: DELETE_POST,
  payload: { postId }
});

export const setPostDeleted = postId => ({
  type: SET_POST_DELETED,
  payload: { postId }
});
