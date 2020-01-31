import { MODAL_OPEN, MODAL_CLOSE } from "../../actions/ui";

const initialState = {};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case MODAL_OPEN:
      return {
        ...state,
        [action.payload.feature]: true
      };
    case MODAL_CLOSE:
      return {
        ...state,
        [action.payload.feature]: false
      };
    default:
      return state;
  }
};

export default uiReducer;
