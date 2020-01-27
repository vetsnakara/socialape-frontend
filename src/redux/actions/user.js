import api from "../../services/api";

// scope name
const scope = "user";

// action types
export const FETCH_USER_DETAILS = `[${scope}] FETCH_USER_DETAILS`;
export const UPLOAD_USER_IMAGE = `[${scope}] UPLOAD_USER_IMAGE`;
export const UPDATE_USER_DETAILS = `[${scope}] UPDATE_USER_DETAILS`;

export const SET_USER_DETAILS = `[${scope}] SET_USER_DETAILS`;
export const SET_USER_IMAGE = `[${scope}] SET_USER_IMAGE`;
export const SET_UPDATED_USER_DETAILS = `[${scope}] SET_UPDATED_USER_DETAILS`;

// action creators
export const fetchUserDetails = () => ({
  type: FETCH_USER_DETAILS
});

export const uploadUserImage = imageData => ({
  type: UPLOAD_USER_IMAGE,
  payload: { imageData }
});

export const updateUserDetails = newDetails => ({
  type: UPDATE_USER_DETAILS,
  payload: { newDetails }
});

export const setUserDetails = details => ({
  type: SET_USER_DETAILS,
  payload: { details }
});

export const setUserImage = imgUrl => ({
  type: SET_USER_IMAGE,
  payload: { imgUrl }
});

export const setUpdatedUserDetails = updatedDetails => ({
  type: SET_UPDATED_USER_DETAILS,
  payload: { updatedDetails }
});
