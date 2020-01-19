import SignupPage from "./signup";
import { connect } from "react-redux";

import { FEATURE_NAME, doSignupUser } from "../../redux/actions/user/signup";

const mapState = state => {
  return {
    loading: state.loading.includes(FEATURE_NAME),
    error: state.error[FEATURE_NAME]
  };
};

const mapDispatch = dispatch => ({
  signup: (userData, history) => dispatch(doSignupUser({ userData, history }))
});

export default connect(mapState, mapDispatch)(SignupPage);
