import HomePage from "./home";
import { connect } from "react-redux";
import { FETCH_POSTS } from "../../redux/actions/posts";

import { fetchPosts } from "../../redux/actions/posts";

const mapState = state => ({
  posts: state.posts,
  loading: state.loading.includes(FETCH_POSTS),
  error: state.errors[FETCH_POSTS]
});

const mapDispatch = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapState, mapDispatch)(HomePage);
