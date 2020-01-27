import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => ({
  form: {
    justifyContent: "space-around",
    textAlign: "center"
  },

  formField: {
    "&:not(:last-child)": {
      marginBottom: 30
    }
  },

  button: {
    marginBottom: 20,
    position: "relative",
    cursor: "pointer"
  },

  buttonText: {
    color: ({ loading }) => (loading ? "transparent" : "inherit")
  },

  buttonProgress: {
    display: ({ loading }) => (loading ? "block" : "none"),
    position: "absolute"
  },

  textFieldsContainer: {
    marginBottom: 40
  },

  customError: {
    color: "red",
    fontSize: "0.8 rem",
    marginBottom: 15
  }
}));
