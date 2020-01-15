import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { doLogoutUser } from "../redux/actions/user";

const Logout = ({ logout }) => {
  logout();
  return <Redirect to="/" />;
};

const mapDispatch = dispatch => ({
  logout: () => dispatch(doLogoutUser)
});

export default connect(null, mapDispatch)(Logout);
