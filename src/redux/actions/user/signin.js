// todo: use constant for token name in LS
import api from "../../../services/api";
import { apiRequest, apiSuccess } from "../api";
import { httpError } from "../httpError";

export const FEATURE_NAME = "sign_in";
export const SIGN_IN_SET_DATA = "SIGN_IN_SET_DATA";

export const authUser = options =>
  apiRequest(FEATURE_NAME, authUserWithApi, options);

export const authByToken = token => {
  const tokenWithBearer = `Bearer ${token}`;
  api.http.setRequestHeader("Authorization", tokenWithBearer);
  localStorage.setItem("token", tokenWithBearer);
};

const authUserWithApi = ({ userData, history }) => async dispatch => {
  try {
    const { token } = await api.login(userData);
    authByToken(token);
    dispatch(apiSuccess(FEATURE_NAME));
    history.push("/");
  } catch (error) {
    dispatch(httpError(FEATURE_NAME, error));
  }
};
