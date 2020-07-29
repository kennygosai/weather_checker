/*
 * Filename: \client\src\pages\Daily\index.js
 * Created Date: Thursday, June 11th 2020, 8:44:51 am
 * Author: Kenny Gosai
 *
 * Copyright (c) 2020 Kenny Gosai
 */

import React from "react";
import { useStyles } from "./useStyles";
import Typography from "@material-ui/core/Typography";
import DailyData from "../../components/DailyData";
import { useSelector } from "react-redux";
import { Box, Paper, Divider, CircularProgress } from "@material-ui/core";
import LocationForm from "../../components/LocationForm";
import { withRouter } from "react-router-dom";

/**
 * Home Page. Displays the high / low for the next 8 days
 *
 * @component
 * @example
 * return (
 *   <Daily />
 * )
 */
function Daily(props) {
  const loading = useSelector((state) => state.loading);
  const results = useSelector((state) => state.data);
  const classes = useStyles();

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
                <Box className={classes.weatherContainer}>
                  {Object.keys(results.data.daily.data).map((key) => {
                    return (
                      <DailyData
                        key={key}
                        index={key}
                        data={results.data.daily.data[key]}
                        click={() => {
                          props.history.push(`/day/${key}`);
                        }}
                      ></DailyData>
                    );
                  })}
                </Box>
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
}

export default withRouter(Daily);
