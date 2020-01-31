import { connect } from "react-redux";
import Post from "./Post";

import { like, unlike } from "../../redux/actions/likes";
import { deletePost } from "../../redux/actions/posts";

const mapState = (state, { post: { id } }) => {
  return {
    authenticated: state.auth.authenticated,
    user: state.user
      ? {
          handle: state.user.credentials.handle
        }
      : null,
    isLiked:
      state.user && state.user.likes.map(like => like.postId).includes(id),
    likeInProgress: state.ui.likes.includes(id)
  };
};

const mapDispatch = dispatch => ({
  likePost: postId => dispatch(like(postId)),
  unlikePost: postId => dispatch(unlike(postId)),
  deletePost: postId => dispatch(deletePost(postId))
});

export default connect(mapState, mapDispatch)(Post);
