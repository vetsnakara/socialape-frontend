import HomePage from "./home";
import { connect } from "react-redux";

import { doFetchPosts } from "../../redux/actions/post";

const mapState = state => ({
  posts: state.posts,
  loading: state.ui.loading,
  error: state.errors
});

const mapDispatch = dispatch => ({
  fetchPosts: () => dispatch(doFetchPosts)
});

export default connect(mapState, mapDispatch)(HomePage);
