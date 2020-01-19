import { setRequestStart, setRequestEnd } from "../actions/loading";
import { clearError, setError } from "../actions/error";

const setData = (feature, data) => ({
  type: `${feature.toUpperCase()}_SET_DATA`,
  payload: { data }
});

const apiMiddleware = ({ dispatch }) => next => action => {
  const { type } = action;

  if (!["API_REQUEST", "API_SUCCESS", "API_ERROR"].includes(type)) {
    return next(action);
  }

  const {
    payload: { feature }
  } = action;

  switch (action.type) {
    case "API_REQUEST":
      const { thunk, args } = action.payload;
      dispatch(setRequestStart(feature));
      dispatch(clearError(feature));
      dispatch(args ? thunk(args) : thunk);
      break;
    case "API_SUCCESS":
      const { data } = action.payload;
      dispatch(setData(feature, data));
      dispatch(setRequestEnd(feature));
      break;
    case "API_ERROR":
      const { error } = action.payload;
      dispatch(setError(feature, error));
      dispatch(setRequestEnd(feature));
      break;
    default:
      next(action); // ???
  }
};

export default apiMiddleware;
