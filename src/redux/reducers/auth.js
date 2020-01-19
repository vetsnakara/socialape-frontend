import { UNAUTH_SET_DATA } from "../actions/auth";
import { SIGN_IN_SET_DATA } from "../actions/user/signin";
import { SIGN_UP_SET_DATA } from "../actions/user/signup";

const initialState = {
  authenticated: false
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SET_DATA:
    case SIGN_UP_SET_DATA:
      return applyAuth();
    case UNAUTH_SET_DATA:
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
