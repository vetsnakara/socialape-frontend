import LoginPage from "./login";
import { connect } from "react-redux";

import { doLoginUserWithData } from "../../redux/actions/user";

const mapState = state => {
  return {
    loading: state.ui.loading,
    error: state.ui.errors
  };
};

const mapDispatch = dispatch => ({
  login: (userData, history) => dispatch(doLoginUserWithData(userData, history))
});

export default connect(mapState, mapDispatch)(LoginPage);
