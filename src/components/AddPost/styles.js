import { makeStyles } from "@material-ui/core";

export default makeStyles({
  root: {
    position: "relative"
  },

  content: {
    marginBottom: 20
  },

  closeButton: {
    position: "absolute",
    top: 6,
    right: 6
  },

  buttonText: {
    color: ({ loading }) => (loading ? "transparent" : "inherit")
  },

  buttonProgress: {
    display: ({ loading }) => (loading ? "block" : "none"),
    position: "absolute"
  }
});
