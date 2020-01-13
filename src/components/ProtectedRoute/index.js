import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const ProtectedRoute = ({
  component: Component,
  render,
  redirectCondition,
  redirectPath = "/",
  ...rest
}) => {
  const { authUser } = useAuth();
  const location = useLocation();

  const { pathname: referrer } = location;

  const isNonAuthorized = redirectCondition(authUser);

  const componentToRender = props => {
    if (isNonAuthorized) {
      return <Redirect to={{ pathname: redirectPath, state: { referrer } }} />;
    }
    return Component ? <Component {...props} /> : render(props);
  };

  return <Route {...rest} render={componentToRender} />;
};

export default ProtectedRoute;
