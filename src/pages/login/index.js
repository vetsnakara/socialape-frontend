import LoginPage from "./login";
import { connect } from "react-redux";

import { authUser } from "../../redux/actions/user/signin";
import { FEATURE_NAME } from "../../redux/actions/user/signin";

const mapState = state => {
  return {
    loading: state.loading.includes(FEATURE_NAME),
    error: state.error[FEATURE_NAME]
  };
};

const mapDispatch = dispatch => ({
  login: (userData, history) => dispatch(authUser({ userData, history }))
});

export default connect(mapState, mapDispatch)(LoginPage);
