import { combineReducers } from "redux";

import loadingReducer from "./loading";
import errorsReducer from "./errors";
import modalsReducer from "./modals";
import likesReducer from "./likes";

const uiReducer = combineReducers({
  loading: loadingReducer,
  errors: errorsReducer,
  modals: modalsReducer,
  likes: likesReducer
});

export default uiReducer;
