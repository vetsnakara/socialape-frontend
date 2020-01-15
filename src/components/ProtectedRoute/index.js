import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, useLocation } from "react-router-dom";

const ProtectedRoute = ({
  component: Component,
  render,
  redirectCondition,
  redirectPath = "/",
  user,
  ...rest
}) => {
  const location = useLocation();

  const { pathname: referrer } = location;

  const isNonAuthorized = redirectCondition(user);

  const componentToRender = props => {
    if (isNonAuthorized) {
      return <Redirect to={{ pathname: redirectPath, state: { referrer } }} />;
    }
    return Component ? <Component {...props} /> : render(props);
  };

  return <Route {...rest} render={componentToRender} />;
};

const mapState = state => ({
  user: state.user
});

export default connect(mapState)(ProtectedRoute);
