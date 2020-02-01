import React from "react";
import { Favorite, FavoriteBorder } from "@material-ui/icons";

import useStyles from "./styles";
import IconButton from "../IconButton";

const Like = ({ isLiked, onClick, disabled = false }) => {
  const classes = useStyles();

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
