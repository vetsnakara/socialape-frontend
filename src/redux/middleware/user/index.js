/* eslint-disable default-case */

import {
  FETCH_USER_DETAILS,
  UPDATE_USER_DETAILS,
  UPLOAD_USER_IMAGE
} from "../../actions/user";

import fetchDetailsHandler from "./fetchDetails";
import updateDetailsHandler from "./updateDetails";
import uploadUserImage from "./image";

// user details middleware
const userMiddleware = () => next => action => {
  next(action);

  switch (action.type) {
    case FETCH_USER_DETAILS:
      fetchDetailsHandler(next);
      break;
    case UPDATE_USER_DETAILS:
      updateDetailsHandler(next, action);
      break;
    case UPLOAD_USER_IMAGE:
      uploadUserImage(next, action);
      break;
  }
};

export default userMiddleware;
