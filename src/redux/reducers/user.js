import {
  SET_USER_AUTHENTICATED,
  SET_USER_UNAUTHENTICATED
} from "../types/user";

const initialState = {
  authenticated: false,
  details: {
    credentials: {},
    likes: [],
    notifications: []
  }
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_AUTHENTICATED:
      return applySetUserAuthenticated(action);
    case SET_USER_UNAUTHENTICATED:
      return applySetUserUnauthenticated();
    default:
      return state;
  }
};

const applySetUserAuthenticated = action => ({
  authenticated: true,
  details: {
    ...action.userDetails
  }
});

const applySetUserUnauthenticated = () => ({
  ...initialState
});

export default userReducer;
