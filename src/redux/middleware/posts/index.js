/* eslint-disable default-case */
import { FETCH_POSTS, DELETE_POST } from "../../actions/posts";

import fetchAllHandler from "./fetchAll";
import deletePostHandler from "./deletePost";

// posts middleware
const postsMiddleware = () => next => action => {
  next(action);

  switch (action.type) {
    case FETCH_POSTS:
      fetchAllHandler(next);
      break;
    case DELETE_POST:
      deletePostHandler(next, action);
      break;
  }
};

export default postsMiddleware;
