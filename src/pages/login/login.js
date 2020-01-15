import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  TextField,
  Grid,
  Typography,
  Button,
  CircularProgress
} from "@material-ui/core";

import AppIcon from "../../images/app-icon.png";

// todo: reuse styles with signup form
import useStyles from "./styles";

const initialState = { email: "", password: "" };

const Login = ({ login, loading, error }) => {
  console.log("login page: error", error);
  const [user, setUser] = useState(initialState);
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
    login(user, history);
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

export default Login;
