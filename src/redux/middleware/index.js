import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import history from "../../services/history";

import uiMiddleware from "./ui";
import apiMiddleware from "./api";
import authMiddleware from "./auth";
import userMiddleware from "./user";
import postsMiddleware from "./posts";

//! apiMiddleware should be after feature middlewares
//! thunk middleware should be after all apiMiddleware

const middlewares = [
  authMiddleware,
  userMiddleware,
  postsMiddleware,
  apiMiddleware,
  uiMiddleware,
  thunk.withExtraArgument(history)
];

export default applyMiddleware(...middlewares);
