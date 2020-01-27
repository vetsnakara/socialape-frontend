/* eslint-disable default-case */

import api from "../../../services/api";

import createApiActions from "../../actions/api";

import { UPDATE_USER_DETAILS, setUpdatedUserDetails } from "../../actions/user";
import { setError } from "../../actions/errors";

// api actions
const { apiRequest, apiSuccess, apiError } = createApiActions(
  UPDATE_USER_DETAILS
);

// async actions (thunks)
const doUpdateUserDetails = newDetails => async dispatch => {
  try {
    const credentials = await api.setUserDetails(newDetails);
    dispatch(apiSuccess(setUpdatedUserDetails(credentials)));
  } catch (error) {
    dispatch(apiError(setError(error)));
  }
};

export default (next, action) =>
  next(apiRequest(doUpdateUserDetails, action.payload.newDetails));
