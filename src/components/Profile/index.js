import Profile from "./Profile";
import { connect } from "react-redux";
import { signOut } from "../../redux/actions/auth";
import {
  fetchUserDetails,
  uploadUserImage,
  FETCH_USER_DETAILS,
  UPLOAD_USER_IMAGE,
  UPDATE_USER_DETAILS
} from "../../redux/actions/user";

// todo: use selectors (reselect)
const mapState = state => ({
  authenticated: state.auth.authenticated,
  loading: [
    FETCH_USER_DETAILS,
    UPLOAD_USER_IMAGE
    // UPDATE_USER_DETAILS
  ].some(feature => state.ui.loading.includes(feature)),
  user: state.user,
  error: null // todo: add error handling
});

const mapDispatch = dispatch => ({
  fetchUser: () => dispatch(fetchUserDetails()),
  signOut: () => dispatch(signOut()),
  uploadImage: imageData => dispatch(uploadUserImage(imageData))
});

export default connect(mapState, mapDispatch)(Profile);
