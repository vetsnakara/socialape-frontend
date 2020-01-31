import { SET_ERROR, CLEAR_ERRORS } from "../../actions/errors";

const errorsReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_ERROR:
      return setError(state, action);
    case CLEAR_ERRORS:
      return clearErrors();
    default:
      return state;
  }
};

const setError = (state, action) => {
  const {
    payload: { error },
    meta: { actionType }
  } = action;

  console.log(error);

  return {
    ...state,
    [actionType]: error
  };
};

const clearErrors = () => ({});

export default errorsReducer;
