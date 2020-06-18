import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

/**
 * Displays Error Message.
 *
 * @component
 * @example
 * const text = "This is the message"
 * const change = (value) => {
 *  //handleChange
 * }
 * return (
 *   <CustomizedSnackbars
 *      text={text}
 *      change={(val) => change(val)}
 *   ></CustomizedSnackbars>
 * )
 */
function CustomizedSnackbars(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    props.change("");
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {props.text}
        </Alert>
      </Snackbar>
    </div>
  );
}

CustomizedSnackbars.propTypes = {
  text: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

export default CustomizedSnackbars;