// scope name
const scope = "errors";

// action types
export const SET_ERROR = `[${scope}] SET_ERROR`;
export const CLEAR_ERRORS = `[${scope}] CLEAR_ERRORS`;

// action creators
export const setError = error => ({
  type: SET_ERROR,
  payload: { error }
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});
