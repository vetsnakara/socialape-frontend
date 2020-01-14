import { FETCH_START, SET_ERRORS } from "../types/ui";
import { SET_POSTS } from "../types/post";
import { SET_USER } from "../types/user";

const initialState = {
  loading: false,
  errors: null
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return applyFetchStart(state);
    case SET_ERRORS:
      return applySetErrors(state);
    case SET_POSTS:
    case SET_USER:
      return applyResetUiState();
    default:
      return state;
  }
};

const applyFetchStart = state => ({
  ...state,
  loading: true,
  errors: null
});

const applyResetUiState = () => ({
  ...initialState
});

const applySetErrors = (state, action) => ({
  ...state,
  loading: false,
  errors: action.error
});

export default uiReducer;
