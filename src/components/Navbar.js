import React from "react";
import { Link } from "react-router-dom";

// MUI
import { AppBar, Toolbar, Button } from "@material-ui/core";

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar className="nav-container">
        <Button color="inherit" to="/" component={Link}>
          Home
        </Button>
        <Button color="inherit" to="/login" component={Link}>
          Login
        </Button>
        <Button color="inherit" to="/signup" component={Link}>
          Signup
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
