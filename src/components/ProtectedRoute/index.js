import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";

const ProtectedRoute = ({
  component: Component,
  render,
  redirectCondition,
  redirectPath = "/",
  ...rest
}) => {
  const location = useLocation();

  const { pathname: referrer } = location;

  const isNonAuthorized = redirectCondition();

  const componentToRender = props => {
    if (isNonAuthorized) {
      return <Redirect to={{ pathname: redirectPath, state: { referrer } }} />;
    }
    return Component ? <Component {...props} /> : render(props);
  };

  return <Route {...rest} render={componentToRender} />;
};

export default ProtectedRoute;
