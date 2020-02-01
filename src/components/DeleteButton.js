import React, { useState } from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

import { Delete as DeleteIcon } from "@material-ui/icons";

import IconButton from "./IconButton";

const DeleteButton = ({ onClickDelete, children }) => {
  const [open, setOpen] = useState(true);

  const handleClickOpen = () => setOpen(true);
  const handleClickClose = () => setOpen(false);

  const handleConfirm = () => {
    onClickDelete();
    handleClickClose();
  };

  return (
    <React.Fragment>
      <IconButton tipTitle="Delete post" onClick={handleClickOpen}>
        <DeleteIcon color="primary" />
      </IconButton>
      <Dialog open={open} onClose={handleClickClose}>
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleConfirm}>
            Ok
          </Button>
          <Button color="secondary" onClick={handleClickClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default DeleteButton;
