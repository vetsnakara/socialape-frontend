/* eslint-disable default-case */
import { LIKE, UNLIKE } from "../../actions/likes";

import likeHandler from "./like";
import unlikeHandler from "./unlike";

// likes middleware
const likesMiddleware = () => next => action => {
  next(action);

  switch (action.type) {
    case LIKE:
      likeHandler(next, action);
      break;
    case UNLIKE:
      unlikeHandler(next, action);
      break;
  }
};

export default likesMiddleware;
