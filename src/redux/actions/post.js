import api from "../../services/api";
import { apiRequest, apiSuccess, apiError } from "../actions/api";

export const FEATURE_NAME = "posts"; // scope?

// action types
export const POSTS_SET_DATA = "POSTS_SET_DATA";

// action creators
export const fetchPosts = () => apiRequest(FEATURE_NAME, getPosts);
const setData = data => apiSuccess(FEATURE_NAME, data);
const setError = error => apiError(FEATURE_NAME, error);

const getPosts = async dispatch => {
  try {
    const posts = await api.getPosts();
    dispatch(setData(posts));
  } catch (error) {
    dispatch(setError({ error: "Somthing goes wrong" }));
  }
};
