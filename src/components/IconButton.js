import React from "react";

import { Tooltip, IconButton } from "@material-ui/core";

export default ({
  onClick,
  tipTitle,
  tipPlacement = "top",
  btnClassName,
  className,
  children,
  ...rest
}) => {
  return (
    <Tooltip title={tipTitle} placement={tipPlacement} className={className}>
      <IconButton onClick={onClick} className={btnClassName} {...rest}>
        {children}
      </IconButton>
    </Tooltip>
  );
};
