/* eslint-disable default-case */

import { SIGN_IN, SIGN_UP, SIGN_OUT } from "../../actions/auth";

import signInHandler from "./signin";
import signUpHandler from "./signup";
import signOutHandler from "./signout";

const authMiddleware = () => next => action => {
  next(action);

  switch (action.type) {
    case SIGN_IN:
      signInHandler(next, action);
      break;
    case SIGN_UP:
      signUpHandler(next, action);
      break;
    case SIGN_OUT:
      signOutHandler(next);
      break;
  }
};

export default authMiddleware;
