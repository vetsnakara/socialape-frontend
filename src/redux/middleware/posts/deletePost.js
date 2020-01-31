/* eslint-disable default-case */

import api from "../../../services/api";

import createApiActions from "../../actions/api";

import { setPostDeleted, DELETE_POST } from "../../actions/posts";
import { setError } from "../../actions/errors";

// api actions
const { apiRequest, apiSuccess, apiError } = createApiActions(DELETE_POST);

// async actions (thunks)
const doFetchPosts = postId => async dispatch => {
  try {
    await api.delete(postId);
    dispatch(apiSuccess(setPostDeleted(postId)));
  } catch (error) {
    dispatch(apiError(setError(error)));
  }
};

export default (next, action) =>
  next(apiRequest(doFetchPosts, action.payload.postId));
