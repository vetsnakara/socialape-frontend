/* eslint-disable default-case */

import api from "../../../services/api";

import createApiActions from "../../actions/api";

import { FETCH_USER_DETAILS, setUserDetails } from "../../actions/user";
import { setError } from "../../actions/errors";

// api actions
const { apiRequest, apiSuccess, apiError } = createApiActions(
  FETCH_USER_DETAILS
);

// async actions (thunks)
const doFetchUserDetails = async dispatch => {
  try {
    const details = await api.getAuthUserDetails();
    dispatch(apiSuccess(setUserDetails(details)));
  } catch (error) {
    dispatch(apiError(setError(error)));
  }
};

export default next => next(apiRequest(doFetchUserDetails));
