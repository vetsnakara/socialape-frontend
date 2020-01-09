import React from "react";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import { Card, CardMedia, Typography, CardContent } from "@material-ui/core";

import styles from "./styles";

const Post = ({ post, classes }) => {
  const {
    body,
    createdAt,
    userHandle,
    screamId,
    likeCount,
    commentCount,
    userImage
  } = post;
  return (
    <Card className={classes.card}>
      <CardMedia
        title="Profile image"
        image={userImage}
        className={classes.image}
      />
      <CardContent className={classes.content}>
        <Typography
          variant="h5"
          component={Link}
          to={`/users/${userHandle}`}
          color="primary"
        >
          {userHandle}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {createdAt}
        </Typography>
        <Typography variant="body1">{body}</Typography>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(Post);
