import { createStore, compose } from "redux";
import rootReducer from "./reducers";
import middleware from "./middleware";

const storeEnhancers = [middleware];

if (process.env.NODE_ENV === "development") {
  // redux-dev-tools
  storeEnhancers.push(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

const configureStore = initialState =>
  createStore(rootReducer, initialState, compose(...storeEnhancers));

export default configureStore;
