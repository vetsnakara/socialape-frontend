import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { signOut } from "../redux/actions/auth";

const SignOut = ({ signOut }) => {
  signOut();
  return <Redirect to="/" />;
};

export default connect(null, { signOut })(SignOut);
