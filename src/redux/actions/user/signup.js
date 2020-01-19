import api from "../../../services/api";
import { apiRequest, apiSuccess } from "../api";
import { authByToken } from "./signin";
import { httpError } from "../httpError";

export const FEATURE_NAME = "sign_up";
export const SIGN_UP_SET_DATA = "SIGN_UP_SET_DATA";

export const doSignupUser = options => {
  return apiRequest(FEATURE_NAME, signupUser, options);
};

const signupUser = ({ userData, history }) => async dispatch => {
  try {
    const { token } = await api.signup(userData);

    authByToken(token);

    dispatch(apiSuccess(FEATURE_NAME));

    history.push("/");
  } catch (error) {
    dispatch(httpError(FEATURE_NAME, error));
  }
};
