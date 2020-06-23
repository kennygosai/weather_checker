/*
 * Filename: \client\src\pages\DailyDetailed\useStyles.js
 * Created Date: Monday, June 22nd 2020, 3:06:39 pm
 * Author: Kenny Gosai
 * 
 * Copyright (c) 2020 Kenny Gosai
 */

import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
    locationText: {
      margin: theme.spacing(3),
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
    },
    text: {
      margin: theme.spacing(3),
    },
    cap: {
      ...theme.typography.caption,
    },
    b1: {
      ...theme.typography.body1,
    },
    b1Top: {
      ...theme.typography.body1,
      margin: theme.spacing(3),
      textAlign: "center",

      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
      },
    },
    content: {
      margin: theme.spacing(3),
    },
    weatherContainer: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
    },
    svg: {
      height: 100,
      width: 100,
    },
    flexDisp: {
      display: "flex",
    },
    loadingContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      margin: theme.spacing(3),
    },
    flexDispPaper: {
      display: "flex",
      width: "100%",
      justifyContent: "space-around",
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },
      ["@media (min-width: 768px) and (max-width: 1199px)"]: { // eslint-disable-line no-useless-computed-key
        flexDirection: "row",
        justifyContent: "space-around",
      },
    },
    paperContainer: {
      margin: theme.spacing(1),
      [theme.breakpoints.down("sm")]: {
        width: 320,
      },
      ["@media (min-width: 768px) and (max-width: 1199px)"]: { // eslint-disable-line no-useless-computed-key
        width: 592,
      },
      ["@media (min-width: 1200px)"]: { // eslint-disable-line no-useless-computed-key
        width: 1184,
      },
    },
  }));