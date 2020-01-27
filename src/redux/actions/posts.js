// scope name
const scope = "posts";

// action types
export const FETCH_POSTS = `[${scope}] FETCH_POSTS`;
export const SET_POSTS = `[${scope}] SET_POSTS`;

// action creators
export const fetchPosts = () => ({
  type: FETCH_POSTS
});

export const setPosts = posts => ({
  type: SET_POSTS,
  payload: { posts }
});
