/* eslint-disable default-case */

import api from "../../../services/api";

import createApiActions from "../../actions/api";

import { addLike, LIKE } from "../../actions/likes";
import { setError } from "../../actions/errors";

// api actions
const { apiRequest, apiSuccess, apiError } = createApiActions(LIKE);

// async actions (thunks)
const doLike = postId => async dispatch => {
  try {
    await api.like(postId);
    dispatch(apiSuccess(addLike(postId)));
  } catch (error) {
    dispatch(apiError(setError(error)));
  }
};

export default (next, action) =>
  next(apiRequest(doLike, action.payload.postId));
