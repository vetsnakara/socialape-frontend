/* eslint-disable default-case */
import { clearErrors } from "../actions/errors";
import { setLoading, clearLoading } from "../actions/loading";
import matchApiStatus from "../../utils/matchApiStatus";

const apiMiddleware = () => next => action => {
  // we swallow action if it not matches with pending|success|error
  const match = matchApiStatus(action.type);
  if (!match) return next(action);

  switch (match.groups.status) {
    case "pending":
      processPending(next, action);
      break;
    case "success":
      processSuccess(next, action);
      break;
    case "error":
      processError(next, action);
      break;
  }
};

const processPending = (next, action) => {
  const {
    payload: { thunk, data },
    meta: { actionType }
  } = action;

  next(clearErrors());
  next(setLoading(actionType));
  next(data !== undefined ? thunk(data) : thunk);
};

const processSuccess = (next, action) => {
  const {
    payload: { successAction },
    meta: { actionType }
  } = action;

  next(successAction);
  next(clearLoading(actionType));
};

const processError = (next, action) => {
  const {
    payload: { errorAction },
    meta: { actionType }
  } = action;

  const enrichedErrorAction = { ...errorAction, meta: { actionType } };

  next(enrichedErrorAction);
  next(clearLoading(actionType));
};

export default apiMiddleware;
