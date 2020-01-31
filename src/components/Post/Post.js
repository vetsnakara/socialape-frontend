import React from "react";
import { Link } from "react-router-dom";
import debounce from "lodash/debounce";

import { withStyles } from "@material-ui/core/styles";
import { Card, CardMedia, Typography, CardContent } from "@material-ui/core";
import { Delete as DeleteIcon } from "@material-ui/icons";

import Like from "../Like";
import CommentCount from "../CommentCount";
import IconButton from "../IconButton";

import datetime from "../../utils/datetime";

import styles from "./styles";

const Post = ({
  post,
  classes,
  isLiked,
  authenticated,
  likePost,
  unlikePost,
  deletePost,
  likeInProgress,
  user
}) => {
  console.log("likeInProgress", likeInProgress);
  const handleLikeClick = debounce(() => {
    if (!likeInProgress) {
      if (isLiked) {
        console.log("likeInProgress", likeInProgress, "request unlike");
        unlikePost(post.id);
      } else {
        console.log("likeInProgress", likeInProgress, "request like");
        likePost(post.id);
      }
    }
  }, 300);

  const handleDelete = postId => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure?")) {
      deletePost(postId);
    }
  };

  const {
    body,
    createdAt,
    userHandle,
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
          {datetime.fromNow(createdAt)}
        </Typography>
        <Typography variant="body1">{body}</Typography>
        {/* todo: component for actions (like, unlike, delete) */}
        <div>
          <div>
            {/* todo: make component LikeCount */}
            <Like
              isLiked={isLiked}
              onClick={handleLikeClick}
              disabled={!authenticated}
            />{" "}
            <span>
              {post.likeCount} {`like${likeCount !== 1 ? "s" : ""}`}
            </span>
            <CommentCount count={commentCount} />
            {user && user.handle === userHandle && (
              <IconButton
                tipTitle="Delete post"
                onClick={() => handleDelete(post.id)}
              >
                <DeleteIcon color="primary" />
              </IconButton>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(Post);