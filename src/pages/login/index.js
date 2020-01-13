import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  TextField,
  Grid,
  Typography,
  Button,
  CircularProgress
} from "@material-ui/core";

import { withAuth } from "../../contexts/auth";
import AppIcon from "../../images/app-icon.png";

// todo: reuse styles with signup form
import useStyles from "./styles";

import api from "../../services/api";
import * as HTTP from "../../constants/http";

const initialState = { email: "", password: "" };

const Login = ({ setAuthUser }) => {
  const [user, setUser] = useState(initialState);
  let [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const history = useHistory();
  const classes = useStyles({ loading });

  const handleChange = ({ target: { name, value } }) => {
    setUser(user => ({
      ...user,
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    setError(null);
    setLoading(true);

    try {
      const { token } = await api.login(user);

      // Success 🎉
      setAuthUser(token);

      setUser(initialState);
      setError(null);
      setLoading(false);

      // redirect
      history.push("/");
    } catch (error) {
      // Error 😨
      const { request, response } = error;

      if (response) {
        /*
         * The request was made and the server responded with a
         * status code that falls out of the range of 2xx
         */
        if (response.status === HTTP.BAD_REQUEST) {
          setError({
            type: "validation",
            ...response.data
          });
        } else if (error.response.status === HTTP.UNAUTHORIZED) {
          setError({
            type: "general",
            message: response.data.error
          });
        }
        // todo: Internal Server Error (500) hadnling
      } else if (request) {
        /*
         * The request was made but no response was received
         *   - no connection with internet
         *   - server dont't responses
         *
         */
        console.log("no response case");
        console.log("error.toJSON()", error.toJSON());
        console.log("error.request", error.request);
        console.log("error.response", error.response);
        setError({
          type: "network",
          message: error.code
        });

        // https://github.com/axios/axios/issues/383#issuecomment-234079506
        // if (!error.status) {
        //   // network error
        // }
      } else {
        // Something happened in setting up the request and triggered an Error
        console.log("else case");
        // console.log("error.toJSON()", error.toJSON());
        console.log("error.request", error.request);
        console.log("error.response", error.response);
        console.log("error.message", error.message);
        setError(error);
      }

      setLoading(false);
    }
  };

  // todo (api):
  // error = {
  //   message: "should not be empty",
  //   field: "email",
  //   type: "validation | general"
  // };
  // todo: client validation
  // todo: make handleHttpError functions
  // todo: read axios docs
  // todo: fix api - use 401 (Unautorized) instead of 403 (Forbidden)

  return (
    <Grid container className={classes.form}>
      <Grid item sm={5}>
        <img src={AppIcon} alt="App (monkey) Icon" className={classes.image} />
        <Typography variant="h1" className={classes.pageTitle}>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <div className={classes.textFieldsContainer}>
            <TextField
              id="email"
              name="email"
              type="email"
              label="email"
              className={classes.formField}
              value={user.email}
              onChange={handleChange}
              fullWidth
              autoFocus
              error={error && error.type === "validation" && !!error.email}
              helperText={error && error.email}
            />
            <TextField
              id="password"
              name="password"
              type="password"
              label="password"
              className={classes.formField}
              value={user.password}
              onChange={handleChange}
              fullWidth
              error={error && error.type === "validation" && !!error.password}
              helperText={error && error.password}
            />
          </div>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            disabled={loading}
          >
            <CircularProgress className={classes.buttonProgress} size={30} />
            <span className={classes.buttonText}>Login</span>
          </Button>

          {error && error.type === "general" && (
            <Typography variant="body2" className={classes.customError}>
              {error.message}
            </Typography>
          )}

          <small className={classes.signUpLink}>
            Don't have an account? Sign up <Link to="/signup">here.</Link>
          </small>
        </form>
      </Grid>
    </Grid>
  );
};

export default withAuth(Login);
