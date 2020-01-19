// todo: implement loading user details in state
// todo: redirect to / after fetch only token

import React, { useEffect } from "react";
import { Paper, Button } from "@material-ui/core";

import useStyles from "./styles";

const Profile = ({ user, authenticated, loading, error, fetchUser }) => {
  useEffect(() => {
    if (authenticated) fetchUser();
  }, []);

  const classes = useStyles();

  const { credentials: handle, createdAt, imageUrl, website, location } = user;

  const content = !loading ? (
    authenticated ? (
      <ProfileAuth user={user} />
    ) : (
      <ProfileNonAuth />
    )
  ) : (
    <p>Loading ...</p>
  );

  return content;
};

const ProfileAuth = user => {
  return <div>{JSON.stringify(user, null, 2)}</div>;
};

const ProfileNonAuth = () => {
  return <div>Non auth user</div>;
};

export default Profile;
