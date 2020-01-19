// todo: implement loading user details in state
// todo: redirect to / after fetch only token

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Paper, Button, Link as MuiLink, Typography } from "@material-ui/core";
import {
  LocationOn,
  Link as LinkIcon,
  CalendarToday
} from "@material-ui/icons";

import datetime from "../../utils/datetime";

import useStyles from "./styles";

const Profile = ({ user, authenticated, loading, error, fetchUser }) => {
  useEffect(() => {
    if (authenticated) fetchUser();
  }, []);

  if (loading) return <p>Loading ...</p>;

  const content = authenticated ? (
    <ProfileAuth user={user} />
  ) : (
    <ProfileNonAuth />
  );

  return content;
};

const ProfileAuth = ({ user }) => {
  const classes = useStyles();

  const {
    credentials: { handle, createdAt, imgUrl, website, location, bio }
  } = user;

  return (
    <Paper className={classes.paper}>
      <div className={classes.profile}>
        <div className="image-wrapper">
          <img src={imgUrl} alt="Profile" className="profile-image" />
        </div>
        <hr />
        <div className="profile-details">
          <MuiLink
            component={Link}
            to={`/users/${handle}`}
            color="primary"
            variant="h5"
          >
            @{handle}
          </MuiLink>
          <hr />
          {bio && <Typography variant="body2">{bio}</Typography>}
          <hr />
          {location && (
            <React.Fragment>
              <LocationOn color="primary" /> <span>{location}</span>
              <hr />
            </React.Fragment>
          )}
          {website && (
            <React.Fragment>
              <LinkIcon color="primary" />
              <a href={website} target="__blank">
                {" "}
                website
              </a>
              <hr />
            </React.Fragment>
          )}
          <CalendarToday color="primary" />{" "}
          <span>Joined {datetime.format(createdAt, "MM YYYY")}</span>
        </div>
      </div>
    </Paper>
  );
};

const ProfileNonAuth = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Typography variant="body2" align="center">
        No profile found. Please login.
        <div className={classes.buttons}>
          <Button
            variant="outlined"
            color="primary"
            component={Link}
            to="/login"
          >
            Login
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            component={Link}
            to="/signup"
          >
            Signup
          </Button>
        </div>
      </Typography>
    </Paper>
  );
};

export default Profile;
