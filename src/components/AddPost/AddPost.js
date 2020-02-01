import React, { useState } from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";

import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";

import IconButton from "../IconButton";

import useStyles from "./styles";

const AddPost = ({
  createPost,
  openModal,
  closeModal,
  clearErrors,
  loading,
  error,
  open
}) => {
  const classes = useStyles({ loading });
  const [body, setBody] = useState("");

  const handleOpen = () => {
    setBody("");
    openModal();
  };

  const handleClose = () => {
    if (!loading) {
      closeModal();
      clearErrors();
    }
  };

  const handleChange = ({ target: { value } }) => setBody(value);

  const handleSubmit = () => createPost(body);

  return (
    <React.Fragment>
      <IconButton tipTitle="Create post" onClick={handleOpen}>
        <AddIcon />
      </IconButton>
      <Dialog
        className={classes.root}
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Add new post</DialogTitle>
        <DialogContent className={classes.content}>
          <TextField
            multiline
            rows={3}
            label="Post"
            placeholder="Type short message here 😉"
            fullWidth
            variant="outlined"
            value={body}
            onChange={handleChange}
            disabled={loading}
            error={error && error.type === "validation" && !!error.body}
            helperText={error && error.body}
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleSubmit}
            disabled={loading}
          >
            <CircularProgress className={classes.buttonProgress} size={30} />
            <span className={classes.buttonText}>Ok</span>
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleClose}
            disabled={loading}
          >
            Cancel
          </Button>
          <IconButton
            tipTitle="Close"
            className={classes.closeButton}
            onClick={handleClose}
            disabled={loading}
          >
            <CloseIcon />
          </IconButton>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default AddPost;
