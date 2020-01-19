import { SET_ERROR, CLEAR_ERROR } from "../actions/error";
import withActionParse from "./enhancers/withActionParse";

const errorReducer = (state = {}, action) => {
  const { payload } = action;

  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        [payload.feature]: payload.error
      };
    case CLEAR_ERROR:
      const newState = { ...state };
      delete newState[payload.feature];
      return newState;
    default:
      return state;
  }
};

export default withActionParse(errorReducer, [SET_ERROR, CLEAR_ERROR]);
