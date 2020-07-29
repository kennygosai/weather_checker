/*
 * Filename: \client\src\pages\HourlyView\index.js
 * Created Date: Monday, June 15th 2020, 12:16:54 pm
 * Author: Kenny Gosai
 *
 * Copyright (c) 2020 Kenny Gosai
 */

import React from "react";
import { useSelector } from "react-redux";
import LocationForm from "../../components/LocationForm";
import {
  Divider,
  Box,
  Typography,
  Paper,
  IconButton,
  CircularProgress,
} from "@material-ui/core";
import { useStyles } from "./useStyles";
import CollapsibleTable from "../../components/CollapsibleTable";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { withRouter } from "react-router-dom";

/**
 * Page "/hour". Displays a detailed forecast of the hour selected
 *
 * @component
 * @example
 * return (
 *   <HourlyView />
 * )
 */
const HourlyView = (props) => {
  const results = useSelector((state) => state.data);
  const classes = useStyles();
  const loading = useSelector((state) => state.loading);

  return (
    <React.Fragment>
      <LocationForm></LocationForm>
      <Divider></Divider>
      {!loading ? (
        results.length !== 0 ? (
          <React.Fragment>
            <Box className={classes.locationText}>
              <Typography variant="h4" data-testid="title" gutterBottom>
                {results.data.formatted}
              </Typography>
            </Box>
            <Box className={classes.weatherContainer}>
              <Paper elevation={3} className={classes.paperContainer}>
                <IconButton
                  aria-label="delete"
                  onClick={() => props.history.push("/day/0")}
                >
                  <ArrowBackIcon />
                </IconButton>
                <CollapsibleTable
                  data={results.data.hourly.data}
                ></CollapsibleTable>
              </Paper>
            </Box>
          </React.Fragment>
        ) : null
      ) : (
        <Box className={classes.loadingContainer}>
          <CircularProgress></CircularProgress>
        </Box>
      )}
    </React.Fragment>
  );
};
export default withRouter(HourlyView);
