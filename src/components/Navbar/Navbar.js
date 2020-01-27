import React from "react";
import { Link } from "react-router-dom";

import { AppBar, Toolbar, Button } from "@material-ui/core";
import {
  Add as AddIcon,
  Notifications as NotificationsIcon,
  Home as HomeIcon
} from "@material-ui/icons";

import IconButton from "../IconButton";

const Navbar = ({ authenticated }) => {
  return (
    <AppBar>
      <Toolbar className="nav-container">
        {authenticated ? <NavbarItemsAuth /> : <NavbarItemsNonAuth />}
      </Toolbar>
    </AppBar>
  );
};

const NavbarItemsAuth = () => {
  return (
    <React.Fragment>
      <IconButton tipTitle="Home" component={Link} to="/">
        <HomeIcon />
      </IconButton>
      <IconButton tipTitle="Create post">
        <AddIcon />
      </IconButton>
      <IconButton tipTitle="Show nofications">
        <NotificationsIcon />
      </IconButton>
    </React.Fragment>
  );
};

const NavbarItemsNonAuth = () => {
  return (
    <React.Fragment>
      <Button color="inherit" to="/signin" component={Link}>
        Signin
      </Button>
      <Button color="inherit" to="/signup" component={Link}>
        Signup
      </Button>
    </React.Fragment>
  );
};

export default Navbar;
