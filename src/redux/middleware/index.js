import { applyMiddleware } from "redux";

import thunk from "redux-thunk";
import httpError from "./httpError";
import api from "./api";

const middlewares = [thunk, httpError, api];

export default applyMiddleware(...middlewares);
