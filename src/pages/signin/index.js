import SignInPage from "./signin";
import { connect } from "react-redux";

import { signIn, SIGN_IN } from "../../redux/actions/auth";

const mapState = state => {
  return {
    loading: state.loading.includes(SIGN_IN),
    error: state.errors[SIGN_IN]
  };
};

const mapDispatch = dispatch => ({
  signIn: userData => dispatch(signIn(userData))
});

export default connect(mapState, mapDispatch)(SignInPage);
