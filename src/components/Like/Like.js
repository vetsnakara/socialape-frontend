import React from "react";
import { Favorite, FavoriteBorder } from "@material-ui/icons";

import IconButton from "../IconButton";

const Like = ({ isLiked, onClick, disabled = false }) => {
  if (disabled) return <FavoriteBorder color="primary" />;

  return (
    <IconButton tipTitle={isLiked ? "Undo like" : "Like"} onClick={onClick}>
      {isLiked ? (
        <Favorite color="primary" />
      ) : (
        <FavoriteBorder color="primary" />
      )}
    </IconButton>
  );
};

export default Like;
