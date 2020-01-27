import { SET_USER_AUTH, SET_USER_UNAUTH } from "../actions/auth";

const initialState = {
  authenticated: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_AUTH:
      return applyAuth();
    case SET_USER_UNAUTH:
      return applyUnauth();
    default:
      return state;
  }
};

const applyAuth = () => ({
  authenticated: true
});

const applyUnauth = () => initialState;

export default authReducer;
