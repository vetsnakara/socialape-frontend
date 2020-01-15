// todo: add toast notifications
// todo: request cancellation is needed when redirect occurs during the request
// https://github.com/axios/axios/blob/master/README.md#cancellation
// todo: do 500 and other non user errors error handling in interceptor
// todo: remove unused code (contexts, e.t.c)

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";

import { doLoginUserWithToken } from "./redux/actions/user";

import theme from "./styles/theme";

import "./App.css";

// components
import Navbar from "./components/Navbar";
import Logout from "./components/Logout";
import ProtectedRoute from "./components/ProtectedRoute";

// pages
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import HomePage from "./pages/home";

const App = ({ loginWithToken }) => {
  useEffect(() => {
    loginWithToken();
  }, []);

  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <ProtectedRoute
              path="/login"
              component={LoginPage}
              redirectCondition={user => user.authenticated}
              redirectPath="/"
            />
            <ProtectedRoute
              path="/signup"
              component={SignupPage}
              redirectCondition={user => user.authenticated}
              redirectPath="/"
            />
            <Route path="/logout" component={Logout} />
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  );
};

const mapDispatch = dispatch => ({
  loginWithToken: () => dispatch(doLoginUserWithToken)
});

export default connect(null, mapDispatch)(App);
