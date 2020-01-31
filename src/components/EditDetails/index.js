import EditDetails from "./EditDetails";
import { connect } from "react-redux";
import { openModal, closeModal } from "../../redux/actions/ui";
import {
  UPDATE_USER_DETAILS,
  updateUserDetails
} from "../../redux/actions/user";

// todo: add error handling

const mapState = state => {
  return {
    open: state.ui.modals[UPDATE_USER_DETAILS],
    loading: state.ui.loading.includes(UPDATE_USER_DETAILS)
  };
};

const mapDispatch = dispatch => ({
  openModal: () => dispatch(openModal(UPDATE_USER_DETAILS)),
  closeModal: () => dispatch(closeModal(UPDATE_USER_DETAILS)),
  changeDetails: details => dispatch(updateUserDetails(details))
});

export default connect(mapState, mapDispatch)(EditDetails);
