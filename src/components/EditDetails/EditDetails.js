import React, { useState } from "react";

// Material UI
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  CircularProgress
} from "@material-ui/core";

import { Edit as EditIcon } from "@material-ui/icons";
import IconButton from "../IconButton";

// styles
import useStyles from "./styles";

const EditDetails = ({
  currentDetails,
  loading,
  error,
  changeDetails,
  open,
  openModal,
  closeModal
}) => {
  const [details, setDetails] = useState(currentDetails);

  const handleChange = ({ target: { name, value } }) => {
    setDetails(details => ({
      ...details,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    changeDetails(details);
  };

  const handleClose = () => {
    if (!loading) closeModal();
  };

  const classes = useStyles({ loading });

  return (
    <React.Fragment>
      <IconButton tipTitle="Edit profile" onClick={openModal}>
        <EditIcon color="primary" />
      </IconButton>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle id="form-dialog-title">Profile Details</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            label="Bio"
            name="bio"
            type="text"
            multiline
            rows={3}
            fullWidth
            placeholder="Some words about you ..."
            value={details.bio}
            onChange={handleChange}
            className={classes.formField}
          />
          <TextField
            label="Website"
            name="website"
            type="text"
            fullWidth
            placeholder="Your website address here ..."
            value={details.website}
            onChange={handleChange}
            className={classes.formField}
          />
          <TextField
            label="Location"
            name="location"
            type="text"
            fullWidth
            placeholder="Where are you from?"
            value={details.location}
            onChange={handleChange}
            className={classes.formField}
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleSubmit}
            variant="outlined"
            color="primary"
            disabled={loading}
          >
            <CircularProgress className={classes.buttonProgress} size={30} />
            <span className={classes.buttonText}>Ok</span>
          </Button>

          <Button
            onClick={closeModal}
            color="secondary"
            variant="outlined"
            disabled={loading}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default EditDetails;
