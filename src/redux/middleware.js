import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const middlewares = [thunk];

export default applyMiddleware(...middlewares);
