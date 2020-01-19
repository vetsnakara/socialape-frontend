import { handleError } from "../../services/http";
import { apiError } from "../actions/api";

const createErrorHandlers = ({ feature, dispatch }) => ({
  requestReceived: ({ response }) => {
    if (response.status === 400) {
      dispatch(
        apiError(feature, {
          type: "validation",
          ...response.data
        })
      );
    } else if (response.status === 403) {
      dispatch(
        apiError(feature, {
          type: "general",
          message: response.data.error
        })
      );
    }

    // todo: Internal Server Error (500) hadnling
  },

  responseNotReceived: error => {
    dispatch(
      apiError(feature, {
        type: "network",
        message: error.code
      })
    );
  },

  setupRequestFailed: error => {
    dispatch(apiError(feature, error));
  }
});

const httpErrorMiddleware = ({ dispatch }) => next => action => {
  if (action.type === "HTTP_ERROR") {
    const {
      payload: { feature, error }
    } = action;

    const handlers = createErrorHandlers({ feature, dispatch });

    return handleError(error, handlers);
  }

  next(action);
};

export default httpErrorMiddleware;
