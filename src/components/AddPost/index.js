import { connect } from "react-redux";
import { createPost, CREATE_POST } from "../../redux/actions/posts";
import { openModal, closeModal } from "../../redux/actions/ui";
import { clearErrors } from "../../redux/actions/errors";
import AddPost from "./AddPost";

const mapState = state => ({
  loading: state.ui.loading.includes(CREATE_POST),
  open: state.ui.modals[CREATE_POST],
  error: state.ui.errors[CREATE_POST]
});

const mapDispatch = dispatch => ({
  createPost: body => dispatch(createPost(body)),
  openModal: () => dispatch(openModal(CREATE_POST)),
  closeModal: () => dispatch(closeModal(CREATE_POST)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapState, mapDispatch)(AddPost);
