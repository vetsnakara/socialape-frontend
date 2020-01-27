import Navbar from "./Navbar";
import { connect } from "react-redux";

const mapState = state => ({
  authenticated: state.auth.authenticated
});

export default connect(mapState)(Navbar);
