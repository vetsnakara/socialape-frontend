import SignupPage from "./signup";
import { connect } from "react-redux";

import { doSignupUser } from "../../redux/actions/user";

const mapState = state => {
  return {
    loading: state.ui.loading,
    error: state.ui.errors
  };
};

const mapDispatch = dispatch => ({
  signup: (userData, history) => dispatch(doSignupUser(userData, history))
});

export default connect(mapState, mapDispatch)(SignupPage);
