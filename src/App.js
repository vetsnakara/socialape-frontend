// todo: add loading indicator for background processes
// todo: use absolute import paths
// todo: add toast notifications
// todo: add proptypes everywhere
// todo: request cancellation is needed when redirect occurs during the request
// https://github.com/axios/axios/blob/master/README.md#cancellation
// todo: do 500 and other non user errors error handling in interceptor
// todo: remove unused code (contexts, e.t.c)
// todo: implement optimistic updates (use undoable reducer enhancer (see. Thinking in Redux))
// todo: handle error requestNotReceived
// todo: create home link in navbar
// todo: remove global css from App.css (use css-in-js)
// todo: make app responsive

import React from "react";
import { connect } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import history from "./services/history";

import theme from "./styles/theme";

import "./App.css";

// components
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import SignOut from "./components/SignOut";

// pages
import HomePage from "./pages/home";
import SignInPage from "./pages/signin";
import SignUpPage from "./pages/signup";

const App = ({ authenticated }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <Router history={history}>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" exact component={HomePage} />
            <ProtectedRoute
              path="/signin"
              component={SignInPage}
              redirectCondition={() => authenticated}
              redirectPath="/"
            />
            <ProtectedRoute
              path="/signup"
              component={SignUpPage}
              redirectCondition={() => authenticated}
              redirectPath="/"
            />
            <Route path="/signout" component={SignOut} />
          </Switch>
        </div>
      </Router>
    </MuiThemeProvider>
  );
};

const mapState = state => ({
  authenticated: state.auth.authenticated
});

export default connect(mapState)(App);
