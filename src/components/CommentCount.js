import React from "react";
import { Chat as ChatIcon } from "@material-ui/icons";

const CommentCount = ({ count }) => {
  return (
    <span>
      <ChatIcon color="primary" /> {count} {`comment${count !== 1 ? "s" : ""}`}
    </span>
  );
};

export default CommentCount;
