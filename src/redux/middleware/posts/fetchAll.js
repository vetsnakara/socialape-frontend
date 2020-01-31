/* eslint-disable default-case */

import api from "../../../services/api";

import createApiActions from "../../actions/api";

import { setPosts, FETCH_POSTS } from "../../actions/posts";
import { setError } from "../../actions/errors";

// api actions
const { apiRequest, apiSuccess, apiError } = createApiActions(FETCH_POSTS);

// async actions (thunks)
const doFetchPosts = async dispatch => {
  try {
    const posts = await api.getPosts();
    dispatch(apiSuccess(setPosts(posts)));
  } catch (error) {
    dispatch(apiError(setError(error)));
  }
};

export default next => next(apiRequest(doFetchPosts));
