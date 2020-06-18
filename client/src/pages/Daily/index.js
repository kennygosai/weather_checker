import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import CountrySelect from "../../components/CountrySelect";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import DailyData from "../../components/DailyData";
import { useSelector } from "react-redux";
import { testdata } from "../../assets/test/data";
import { Box, Paper, Divider, CircularProgress } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import LocationForm from "../../components/locationForm";
import { withRouter } from "react-router-dom";

const axios = require("axios");

function Daily(props) {
  const useStyles = makeStyles((theme) => ({
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
      ["@media (min-width: 768px) and (max-width: 1199px)"]: {
        width: 592,
      },
      ["@media (min-width: 1200px) and (max-width: 1280px)"]: {
        width: 1184,
      },
    },
  }));
  const loading = useSelector((state) => state.loading);
  const results = useSelector((state) => state.data);
  const classes = useStyles();
  console.log(results);

  return (
    <React.Fragment>
      <LocationForm></LocationForm>
      <Divider></Divider>

      {!loading ? (
        results.length !== 0 ? (
          <React.Fragment>
            <Box className={classes.locationText}>
              <Typography variant="h4" gutterBottom>
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
