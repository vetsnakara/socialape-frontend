import {
  SET_USER_DETAILS,
  SET_UPDATED_USER_DETAILS,
  SET_USER_IMAGE
} from "../actions/user";

import { ADD_LIKE, REMOVE_LIKE } from "../actions/likes";

import { SET_USER_UNAUTH } from "../actions/auth";

// const initialState = {
//   credentials: {},
//   likes: [],
//   notifications: []
// };

const initialState = null;

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DETAILS:
      return setUserDetails(action);
    case SET_UPDATED_USER_DETAILS:
      return changeUserDetails(state, action);
    case SET_USER_IMAGE:
      return setImageUrl(state, action);
    case SET_USER_UNAUTH:
      return clearUserDetails();
    case ADD_LIKE:
      return addLike(state, action);
    case REMOVE_LIKE:
      return removeLike(state, action);
    default:
      return state;
  }
};

const setUserDetails = action => ({
  ...action.payload.details
});

const clearUserDetails = () => initialState;

const setImageUrl = (state, action) => {
  const { credentials } = state;
  return {
    ...state,
    credentials: {
      ...credentials,
      imgUrl: action.payload.imgUrl
    }
  };
};

const changeUserDetails = (state, action) => {
  const { credentials } = state;
  return {
    ...state,
    credentials: {
      ...credentials,
      ...action.payload.updatedDetails
    }
  };
};

const addLike = (state, action) => {
  const {
    likes,
    credentials: { handle }
  } = state;
  const { postId } = action.payload;

  const newLike = {
    handle,
    postId
  };

  return {
    ...state,
    likes: [...likes, newLike]
  };
};

const removeLike = (state, action) => {
  const { likes } = state;
  const { postId } = action.payload;

  return {
    ...state,
    likes: likes.filter(like => like.postId !== postId)
  };
};

export default userReducer;
