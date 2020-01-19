import Navbar from "./Navbar";
import { connect } from "react-redux";

const mapState = state => ({
  auth: state.auth
});

export default connect(mapState)(Navbar);
