import { combineReducers } from "redux";

import authReducer from "./auth";
import userReducer from "./user";
import postsReducer from "./posts";
import loadingReducer from "./loading";
import errorsReducer from "./errors";
import uiReducer from "./ui";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  posts: postsReducer,
  loading: loadingReducer,
  errors: errorsReducer,
  ui: uiReducer
});

export default rootReducer;
