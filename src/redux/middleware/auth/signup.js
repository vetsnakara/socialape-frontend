import api from "../../../services/api";
import { setUserToken } from "./utils";

import createApiActions from "../../actions/api";

import { SIGN_UP, setUserAuth } from "../../actions/auth";
import { setError } from "../../actions/errors";

// api actions
const { apiRequest, apiSuccess, apiError } = createApiActions(SIGN_UP);
// thunk
const doSignUp = userData => async (dispatch, getState, history) => {
  try {
    const { token } = await api.signup(userData);
    setUserToken(token);
    dispatch(apiSuccess(setUserAuth()));
    history.push("/");
  } catch (error) {
    dispatch(apiError(setError(error)));
  }
};

export default (next, action) =>
  next(apiRequest(doSignUp, action.payload.userData));
