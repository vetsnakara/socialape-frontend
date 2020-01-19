import Profile from "./Profile";
import { connect } from "react-redux";
import { fetchAuthUserDetails } from "../../redux/actions/user/details";
import { FEATURE_NAME } from "../../redux/actions/user/details";

const mapState = state => ({
  authenticated: state.auth.authenticated,
  loading: state.loading.includes(FEATURE_NAME),
  user: state.user,
  error: state.error[FEATURE_NAME]
});

export default connect(mapState, { fetchUser: fetchAuthUserDetails })(Profile);
