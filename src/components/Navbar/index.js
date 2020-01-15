import Navbar from "./Navbar";
import { connect } from "react-redux";

const mapState = state => ({
  user: state.user
});

export default connect(mapState)(Navbar);
