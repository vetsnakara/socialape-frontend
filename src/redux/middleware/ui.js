/* eslint-disable default-case */

import { closeModal } from "../actions/ui";
import { UPDATE_USER_DETAILS, SET_UPDATED_USER_DETAILS } from "../actions/user";
import { CREATE_POST, SET_NEW_POST } from "../actions/posts";

const postsMiddleware = () => next => action => {
  next(action);

  switch (action.type) {
    case SET_UPDATED_USER_DETAILS:
      next(closeModal(UPDATE_USER_DETAILS));
      break;
    case SET_NEW_POST:
      next(closeModal(CREATE_POST));
      break;
  }
};

export default postsMiddleware;
