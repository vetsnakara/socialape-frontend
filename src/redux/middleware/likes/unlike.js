/* eslint-disable default-case */

import api from "../../../services/api";

import createApiActions from "../../actions/api";

import { removeLike, UNLIKE } from "../../actions/likes";
import { setError } from "../../actions/errors";

// api actions
const { apiRequest, apiSuccess, apiError } = createApiActions(UNLIKE);

// async actions (thunks)
const doUnlike = postId => async dispatch => {
  try {
    await api.unlike(postId);
    dispatch(apiSuccess(removeLike(postId)));
  } catch (error) {
    dispatch(apiError(setError(error)));
  }
};

export default (next, action) =>
  next(apiRequest(doUnlike, action.payload.postId));
