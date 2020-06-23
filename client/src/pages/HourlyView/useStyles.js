/*
 * Filename: \client\src\pages\HourlyView\useStyles.js
 * Created Date: Monday, June 22nd 2020, 3:20:48 pm
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
