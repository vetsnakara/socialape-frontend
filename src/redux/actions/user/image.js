import { apiRequest, apiSuccess } from "../api";
import api from "../../../services/api";
import { httpError } from "../../actions/httpError";

export const FEATURE_NAME = "image_upload";
export const IMAGE_UPLOAD_SET_DATA = "IMAGE_UPLOAD_SET_DATA";

export const uploadImage = image =>
  apiRequest(FEATURE_NAME, doUploadImage, image);

const doUploadImage = image => async dispatch => {
  try {
    const { imgUrl } = await api.uploadImage(image);
    dispatch(apiSuccess(FEATURE_NAME, { imgUrl }));
  } catch (error) {
    dispatch(httpError(FEATURE_NAME, error));
  }
};
