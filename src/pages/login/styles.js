import { makeStyles } from "@material-ui/core";

export default makeStyles(theme => {
  return {
    form: {
      justifyContent: "space-around",
      textAlign: "center"
    },

    formField: {
      "&:not(:last-child)": {
        marginBottom: 15
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

    pageTitle: {
      fontSize: 45,
      marginBottom: 20
    },

    textFieldsContainer: {
      marginBottom: 40
    },

    customError: {
      color: "red",
      fontSize: "0.8 rem",
      marginBottom: 15
    },

    signUpLink: {
      display: "block"
    }
  };
});
