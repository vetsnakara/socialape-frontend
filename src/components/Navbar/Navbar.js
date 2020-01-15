import React from "react";
import { Link } from "react-router-dom";

import { AppBar, Toolbar, Button } from "@material-ui/core";

const Navbar = ({ user }) => {
  return (
    <AppBar>
      <Toolbar className="nav-container">
        <Button color="inherit" to="/" component={Link}>
          Home
        </Button>
        {user.authenticated ? (
          <NavbarItemsAuth user={user} />
        ) : (
          <NavbarItemsNonAuth />
        )}
      </Toolbar>
    </AppBar>
  );
};

const NavbarItemsAuth = ({ user }) => {
  return (
    <React.Fragment>
      <Button color="inherit" to={`/profile/${user.email}`} component={Link}>
        {user.details.credentials.email}
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
