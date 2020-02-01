/* eslint-disable default-case */
import { FETCH_POSTS, DELETE_POST, CREATE_POST } from "../../actions/posts";

import fetchAllHandler from "./fetchAll";
import deletePostHandler from "./deletePost";
import createPostHandler from "./createPost";

// posts middleware
const postsMiddleware = () => next => action => {
  next(action);

  switch (action.type) {
    case FETCH_POSTS:
      console.log(action.type);
      fetchAllHandler(next);
      break;
    case DELETE_POST:
      deletePostHandler(next, action);
      break;
    case CREATE_POST:
      createPostHandler(next, action);
      break;
  }
};

export default postsMiddleware;
