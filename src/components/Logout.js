import React from "react";
import { Redirect } from "react-router-dom";
import { withAuth } from "../contexts/auth";

const Logout = ({ setAuthUser }) => {
  setAuthUser(null);
  return <Redirect to="/" />;
};

export default withAuth(Logout);
