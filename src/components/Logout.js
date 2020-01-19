import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { unauthUser } from "../redux/actions/auth";

const Logout = ({ logout }) => {
  logout();
  return <Redirect to="/" />;
};

const mapDispatch = dispatch => ({
  logout: () => dispatch(unauthUser())
});

export default connect(null, mapDispatch)(Logout);
