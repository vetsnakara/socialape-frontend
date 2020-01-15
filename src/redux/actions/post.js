import api from "../../services/api";

import { SET_POSTS } from "../types/post";
import { doFetchStart, doSetErrors } from "./ui";

/*
 * Sync Actions
 */

const doSetPosts = posts => ({ type: SET_POSTS, posts });

/*
 * Async Actions
 */

export const doFetchPosts = async dispatch => {
  try {
    dispatch(doFetchStart());
    const posts = await api.getPosts();
    dispatch(doSetPosts(posts));
  } catch (error) {
    // todo: handle errors here
    dispatch(doSetErrors(error));
  }
};
