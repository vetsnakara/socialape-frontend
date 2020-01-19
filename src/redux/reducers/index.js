import { combineReducers } from "redux";

import userReducer from "./user";
import postReducer from "./post";
import loadingReducer from "./loading";
import errorReducer from "./error";
import authReducer from "./auth";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  posts: postReducer,
  loading: loadingReducer,
  error: errorReducer
});

export default rootReducer;
