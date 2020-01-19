import React from "react";
import { Link } from "react-router-dom";

import { AppBar, Toolbar, Button } from "@material-ui/core";

const Navbar = ({ auth }) => {
  return (
    <AppBar>
      <Toolbar className="nav-container">
        <Button color="inherit" to="/" component={Link}>
          Home
        </Button>
        {auth.authenticated ? <NavbarItemsAuth /> : <NavbarItemsNonAuth />}
      </Toolbar>
    </AppBar>
  );
};

const NavbarItemsAuth = () => {
  return (
    <React.Fragment>
      <Button color="inherit" to={`/profile`} component={Link}>
        Profile
      </Button>
      <Button color="inherit" to="/logout" component={Link}>
        Logout
      </Button>
    </React.Fragment>
  );
};

const NavbarItemsNonAuth = () => {
  return (
    <React.Fragment>
      <Button color="inherit" to="/login" component={Link}>
        Login
      </Button>
      <Button color="inherit" to="/signup" component={Link}>
        Signup
      </Button>
    </React.Fragment>
  );
};

export default Navbar;
