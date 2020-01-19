import { UNAUTH_SET_DATA } from "../actions/auth";
import { USER_DETAILS_SET_DATA } from "../actions/user/details";
import { IMAGE_UPLOAD_SET_DATA } from "../actions/user/image";

const initialState = {
  credentials: {},
  likes: [],
  notifications: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DETAILS_SET_DATA:
      return setUserDetails(action);
    case IMAGE_UPLOAD_SET_DATA:
      return setImageUrl(state, action);
    case UNAUTH_SET_DATA:
      return clearUserDetails();
    default:
      return state;
  }
};

const setUserDetails = action => ({
  ...action.payload.data
});

const clearUserDetails = action => initialState;

const setImageUrl = (state, action) => {
  const { credentials } = state;
  return {
    ...state,
    credentials: {
      ...credentials,
      imgUrl: action.payload.data.imgUrl
    }
  };
};

export default userReducer;
