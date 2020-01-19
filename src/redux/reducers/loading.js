import { REQUEST_START, REQUEST_END } from "../actions/loading";
import withActionParse from "./enhancers/withActionParse";

const loadingReducer = (state = [], action) => {
  switch (action.type) {
    case REQUEST_START:
      return [...state, action.payload.feature];
    case REQUEST_END:
      return state.filter(f => f !== action.payload.feature);
    default:
      return state;
  }
};

export default withActionParse(loadingReducer, [REQUEST_START, REQUEST_END]);
