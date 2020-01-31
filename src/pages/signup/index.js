import SignupPage from "./signup";
import { connect } from "react-redux";

import { SIGN_UP, signUp } from "../../redux/actions/auth";

const mapState = state => {
  return {
    loading: state.ui.loading.includes(SIGN_UP),
    error: state.ui.errors[SIGN_UP]
  };
};

const mapDispatch = dispatch => ({
  signUp: userData => dispatch(signUp(userData))
});

export default connect(mapState, mapDispatch)(SignupPage);
