import { SET_LOADING, CLEAR_LOADING } from "../../actions/loading";

const loadingReducer = (state = [], action) => {
  switch (action.type) {
    case SET_LOADING:
      return setLoading(state, action.payload.actionType);
    case CLEAR_LOADING:
      return clearLoading(state, action.payload.actionType);
    default:
      return state;
  }
};

const setLoading = (state, actionType) => [...state, actionType];

const clearLoading = (state, actionType) =>
  state.filter(type => type !== actionType);

export default loadingReducer;
