import { combineReducers } from "redux";

import userReducer from "./user";
import postReducer from "./post";
import uiReducer from "./ui";

const rootReducer = combineReducers({
  user: userReducer,
  posts: postReducer,
  ui: uiReducer
});

export default rootReducer;
