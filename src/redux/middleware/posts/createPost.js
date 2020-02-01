/* eslint-disable default-case */

import api from "../../../services/api";

import createApiActions from "../../actions/api";

import { setNewPost, CREATE_POST } from "../../actions/posts";
import { setError } from "../../actions/errors";

// api actions
const { apiRequest, apiSuccess, apiError } = createApiActions(CREATE_POST);

// async actions (thunks)
const doCreatePost = body => async dispatch => {
  try {
    const post = await api.create(body);
    dispatch(apiSuccess(setNewPost(post)));
  } catch (error) {
    dispatch(apiError(setError(error)));
  }
};

export default (next, action) =>
  next(apiRequest(doCreatePost, action.payload.body));
