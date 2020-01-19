import Profile from "./Profile";
import { connect } from "react-redux";
import { fetchAuthUserDetails } from "../../redux/actions/user/details";
import { uploadImage } from "../../redux/actions/user/image";
import { FEATURE_NAME as FETCH_USER_DETAILS } from "../../redux/actions/user/details";
import { FEATURE_NAME as UPLOAD_USER_IMAGE } from "../../redux/actions/user/image";

// todo: use selectors (reselect)
const mapState = state => ({
  authenticated: state.auth.authenticated,
  loading: [FETCH_USER_DETAILS, UPLOAD_USER_IMAGE].some(feature =>
    state.loading.includes(feature)
  ),
  user: state.user,
  error: null // handle error
});

const mapDispatch = dispatch => ({
  fetchUser: () => dispatch(fetchAuthUserDetails()),
  uploadImage: image => dispatch(uploadImage(image))
});

export default connect(mapState, mapDispatch)(Profile);
