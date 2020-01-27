/* eslint-disable default-case */

import api from "../../../services/api";

import createApiActions from "../../actions/api";

import { UPLOAD_USER_IMAGE, setUserImage } from "../../actions/user";
import { setError } from "../../actions/errors";

// api actions
const { apiRequest, apiSuccess, apiError } = createApiActions(
  UPLOAD_USER_IMAGE
);

// async actions (thunks)
const doUploadImage = imageData => async dispatch => {
  try {
    const { imgUrl } = await api.uploadImage(imageData);
    dispatch(apiSuccess(setUserImage(imgUrl)));
  } catch (error) {
    dispatch(apiError(setError(error)));
  }
};

export default (next, action) =>
  next(apiRequest(doUploadImage, action.payload.imageData));
