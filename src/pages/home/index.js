import HomePage from "./home";
import { connect } from "react-redux";
import { FEATURE_NAME } from "../../redux/actions/post";

import { fetchPosts } from "../../redux/actions/post";

const mapState = state => ({
  posts: state.posts,
  loading: state.loading.includes(FEATURE_NAME)
  // error: state.errors
});

const mapDispatch = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapState, mapDispatch)(HomePage);
