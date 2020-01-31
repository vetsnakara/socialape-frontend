// scope name
const scope = "like";

// action types
export const LIKE = `[${scope}] LIKE`;
export const UNLIKE = `[${scope}] UNLIKE`;
export const ADD_LIKE = `[${scope}] ADD_LIKE`;
export const REMOVE_LIKE = `[${scope}] REMOVE_LIKE`;

// action creators
export const like = postId => ({
  type: LIKE,
  payload: { postId }
});

export const unlike = postId => ({
  type: UNLIKE,
  payload: { postId }
});

export const addLike = postId => ({
  type: ADD_LIKE,
  payload: { postId }
});

export const removeLike = postId => ({
  type: REMOVE_LIKE,
  payload: { postId }
});
