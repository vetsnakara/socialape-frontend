import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import jwtDecode from "jwt-decode";

import configureStore from "./redux/store";
import api from "./services/api";

import App from "./App";

const isAutheniticated = () => {
  const token = localStorage.getItem("token");

  if (!token) return false;

  try {
    const decodedToken = jwtDecode(token.split("Bearer ")[1]);

    const timeToExp = decodedToken.exp * 1000 - Date.now();
    if (timeToExp < 0) {
      throw new Error("Token is expired");
    }

    api.http.setRequestHeader("Authorization", token);

    return true;
  } catch (error) {
    localStorage.removeItem("token");
    return false;
  }
};

const initialState = {
  auth: {
    authenticated: isAutheniticated()
  }
};

const store = configureStore(initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
