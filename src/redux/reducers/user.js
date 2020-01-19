import { UNAUTH_SET_DATA } from "../actions/auth";
import { USER_DETAILS_SET_DATA } from "../actions/user/details";

const initialState = {
  credentials: {},
  likes: [],
  notifications: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_DETAILS_SET_DATA:
      return setUserDetails(action);
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

export default userReducer;
