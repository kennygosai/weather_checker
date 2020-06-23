/*
 * Filename: \client\src\pages\Daily\useStyles.js
 * Created Date: Sunday, June 21st 2020, 4:15:55 pm
 * Author: Kenny Gosai
 * 
 * Copyright (c) 2020 Kenny Gosai
 */
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "50vh",
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
    buttonInput: {
      margin: theme.spacing(1),
      [theme.breakpoints.down("sm")]: {
        width: 300,
      },
      [theme.breakpoints.up("md")]: {
        width: 300,
      },
    },
    weatherContainer: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
    },
    loadingContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      margin: theme.spacing(3),
    },
    locationText: {
      margin: theme.spacing(3),
      textAlign: "center",

      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
    },
    paperContainer: {
      margin: theme.spacing(1),
      [theme.breakpoints.down("sm")]: {
        width: 296,
      },
      ["@media (min-width: 768px) and (max-width: 1199px)"]: { // eslint-disable-line no-useless-computed-key
        width: 592,
      },
      ["@media (min-width: 1200px) and (max-width: 1280px)"]: { // eslint-disable-line no-useless-computed-key
        width: 1184,
      },
    },
  }));