import { combineReducers } from "redux";

import authReducer from "./auth";
import userReducer from "./user";
import postsReducer from "./posts";
import uiReducer from "./ui";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  posts: postsReducer,
  ui: uiReducer
});

export default rootReducer;
