import api from "../../../services/api";
import { apiRequest, apiSuccess } from "../api";
import { httpError } from "../httpError";

export const FEATURE_NAME = "user_details";
export const USER_DETAILS_SET_DATA = "USER_DETAILS_SET_DATA";

export const fetchAuthUserDetails = () => {
  return apiRequest(FEATURE_NAME, doFetchUserDetails);
};

const doFetchUserDetails = async dispatch => {
  try {
    const details = await api.getAuthUserDetails();
    dispatch(apiSuccess(FEATURE_NAME, details));
  } catch (error) {
    dispatch(httpError(FEATURE_NAME, error));
  }
};
