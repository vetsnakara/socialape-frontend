import React from "react";

import { Tooltip, IconButton } from "@material-ui/core";

export default ({
  onClick,
  tipTitle,
  tipPlacement = "top",
  tipClassName,
  btnClassName,
  children,
  ...rest
}) => {
  return (
    <Tooltip title={tipTitle} placement={tipPlacement} className={tipClassName}>
      <IconButton onClick={onClick} className={btnClassName} {...rest}>
        {children}
      </IconButton>
    </Tooltip>
  );
};
