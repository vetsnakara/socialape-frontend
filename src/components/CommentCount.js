import React from "react";

import { makeStyles } from "@material-ui/core";
import { Chat as ChatIcon } from "@material-ui/icons";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center"
  },

  icon: {
    marginRight: ".5rem",
    marginBottom: "-5px"
  }
});

const CommentCount = ({ count }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ChatIcon color="primary" className={classes.icon} />{" "}
      <span>
        {count} {`comment${count !== 1 ? "s" : ""}`}
      </span>
    </div>
  );
};

export default CommentCount;
