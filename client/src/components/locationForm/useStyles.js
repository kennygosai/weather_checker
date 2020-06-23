/*
 * Filename: d:\Documents\Github\weatherchecker\client\src\components\locationForm\useStyles.js
 * Created Date: Sunday, June 21st 2020, 3:01:06 pm
 * Author: Kenny Gosai
 * 
 * Copyright (c) 2020 Kenny Gosai
 */

import { makeStyles } from "@material-ui/core/styles";

export const  useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
    },
    mainContainer: {
      height: "50vh",
      ["@media (min-height: 1024px) and (max-height: 1366px)"]: { // eslint-disable-line no-useless-computed-key
        height: "34vh",
      },
    },
    toggleinput: {
      marginTop: theme.spacing(1),
      marginLeft: theme.spacing(1),
    },
    cityInput: {
      margin: theme.spacing(1),
      [theme.breakpoints.down("sm")]: {
        width: 300,
      },
      [theme.breakpoints.up("md")]: {
        width: 300,
      },
    },
    svg: {
      [theme.breakpoints.down("sm")]: {
        width: 300,
      },
      [theme.breakpoints.up("md")]: {
        width: 300,
      },
    },
    buttonInput: {
      margin: theme.spacing(1),
      [theme.breakpoints.down("sm")]: {
        width: 300,
      },
      [theme.breakpoints.up("md")]: {
        width: 300,
      },
    },
  }));