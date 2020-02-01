// scope name
const scope = "posts";

// view actions
export const SET_POSTS = `[${scope}] SET_POSTS`;
export const SET_POST_DELETED = `[${scope}] SET_POST_DELETED`;
export const SET_NEW_POST = `[${scope}] SET_NEW_POST`;

export const setPosts = posts => ({
  type: SET_POSTS,
  payload: { posts }
});

export const setPostDeleted = postId => ({
  type: SET_POST_DELETED,
  payload: { postId }
});

export const setNewPost = post => ({
  type: SET_NEW_POST,
  payload: { post }
});

// server actions
export const FETCH_POSTS = `[${scope}] FETCH_POSTS`;
export const DELETE_POST = `[${scope}] DELETE_POST`;
export const CREATE_POST = `[${scope}] CREATE_POST`;

export const fetchPosts = () => ({
  type: FETCH_POSTS
});

export const deletePost = postId => ({
  type: DELETE_POST,
  payload: { postId }
});

export const createPost = body => ({
  type: CREATE_POST,
  payload: { body }
});
