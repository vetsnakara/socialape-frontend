// todo: implement loading user details in state
// todo: redirect to / after fetch only token

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Material UI
import {
  Paper,
  Button,
  Link as MuiLink,
  Typography,
  Tooltip
} from "@material-ui/core";

import {
  LocationOn as LocationOnIcon,
  Link as LinkIcon,
  CalendarToday as CalendarTodayIcon,
  Edit as EditIcon,
  KeyboardReturn as KeyboardReturnIcon
} from "@material-ui/icons";

// componetns
import EditDetails from "../EditDetails";
import IconButton from "../IconButton";

// utils
import datetime from "../../utils/datetime";

// styles
import useStyles from "./styles";

const Profile = ({
  user,
  authenticated,
  loading,
  error,
  signOut,
  fetchUser,
  uploadImage
}) => {
  useEffect(() => {
    if (authenticated && !user) fetchUser();
  }, []);

  if (loading) return <p>Loading ...</p>;

  const content = user ? (
    <ProfileAuth user={user} uploadImage={uploadImage} signOut={signOut} />
  ) : (
    <ProfileNonAuth />
  );

  return content;
};

const ProfileAuth = ({ user, uploadImage, signOut }) => {
  const classes = useStyles();

  const {
    credentials: { handle, createdAt, imgUrl, website, location, bio }
  } = user;

  const handleImageChange = e => {
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image, image.name);
    uploadImage(formData);
  };

  const handleEditPicture = () => document.querySelector("#imageInput").click();

  return (
    <Paper className={classes.paper}>
      <div className={classes.profile}>
        <div className="image-wrapper">
          <img src={imgUrl} alt="Profile" className="profile-image" />
          <input
            type="file"
            onChange={handleImageChange}
            id="imageInput"
            hidden="hidden"
          />
          <IconButton
            tipTitle="Change picture"
            onClick={handleEditPicture}
            btnClassName="button"
          >
            <EditIcon color="primary" />
          </IconButton>
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
              <LocationOnIcon color="primary" /> <span>{location}</span>
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
          <CalendarTodayIcon color="primary" />{" "}
          <span>Joined {datetime.format(createdAt, "MM YYYY")}</span>
          <div className={classes.buttonsAuth}>
            <IconButton
              tipTitle="Signout"
              onClick={signOut}
              btnClassName="button"
            >
              <KeyboardReturnIcon color="primary" />
            </IconButton>
            <EditDetails currentDetails={user.credentials} />
          </div>
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
            to="/signin"
          >
            Signin
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
