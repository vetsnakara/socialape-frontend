import { unsetUserToken } from "./utils";

import { setUserUnauth } from "../../actions/auth";

// thunk
const doSignOut = dispatch => {
  unsetUserToken();
  dispatch(setUserUnauth());
};

export default next => next(doSignOut);
