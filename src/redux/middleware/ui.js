/* eslint-disable default-case */

import { closeModal } from "../actions/ui";
import { UPDATE_USER_DETAILS, SET_UPDATED_USER_DETAILS } from "../actions/user";

const postsMiddleware = () => next => action => {
  next(action);

  switch (action.type) {
    case SET_UPDATED_USER_DETAILS:
      next(closeModal(UPDATE_USER_DETAILS));
      break;
  }
};

export default postsMiddleware;
