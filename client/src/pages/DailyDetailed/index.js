/*
 * Filename: \client\src\pages\DailyDetailed\index.js
 * Created Date: Sunday, June 14th 2020, 3:29:56 pm
 * Author: Kenny Gosai
 *
 * Copyright (c) 2020 Kenny Gosai
 */

import React from "react";
import LocationForm from "../../components/LocationForm";
import { withRouter } from "react-router-dom";
import { useStyles } from "./useStyles";
import { days } from "../../constants/days";
import { temperatureConverter } from "../../js/temperature";
import {
  Divider,
  Box,
  Typography,
  Paper,
  Button,
  IconButton,
  CircularProgress,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { SvgIcon } from "@material-ui/core";
import WeatherIcon from "../../components/WeatherIcon";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

/**
 * Page "/day/:day". Displays a detailed forecast of the day selected
 *
 * @component
 * @example
 * return (
 *   <DailyDetailed />
 * )
 */
const DailyDetailed = (props) => {
  const results = useSelector((state) => state.data);
  const day = props.match.params.day;
  if (day > 7 || day < 0) {
    props.history.push("/");
  }

  const classes = useStyles();
  const data = results.length !== 0 ? results.data.daily.data[day] : null;
  const temperature = useSelector((state) => state.temperature);
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
                  onClick={() => props.history.push("/")}
                >
                  <ArrowBackIcon />
                </IconButton>
                <Box className={classes.weatherContainer}>
                  <Box className={classes.flexDispPaper}>
                    <Box>
                      <Typography
                        variant="h4"
                        gutterBottom
                        className={classes.locationText}
                      >
                        {days[new Date(data.time * 1000).getDay()]}
                      </Typography>
                      <Box className={classes.flexDisp}>
                        <SvgIcon className={classes.svg}>
                          <WeatherIcon type={data.icon}></WeatherIcon>
                        </SvgIcon>
                        <Box>
                          <Typography variant="h5">
                            High:{" "}
                            {temperatureConverter(
                              data.temperatureHigh,
                              temperature
                            )}
                            {temperature === "celsius" ? "℃" : "℉"}
                          </Typography>
                          <Typography variant="caption" gutterBottom>
                            Time:{" "}
                            {new Date(
                              data.temperatureHighTime * 1000
                            ).toLocaleTimeString(undefined, {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </Typography>
                          <Typography variant="h5">
                            Low:{" "}
                            {temperatureConverter(
                              data.temperatureLow,
                              temperature
                            )}
                            {temperature === "celsius" ? "℃" : "℉"}
                          </Typography>
                          <Typography variant="caption" gutterBottom>
                            Time:{" "}
                            {new Date(
                              data.temperatureLowTime * 1000
                            ).toLocaleTimeString(undefined, {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </Typography>
                        </Box>
                      </Box>
                      <div className={classes.b1Top}>{data.summary}</div>
                      {day === "0" ? (
                        <Box className={classes.weatherContainer}>
                          <Button
                            variant="outlined"
                            color="primary"
                            onClick={() => {
                              props.history.push("/hour");
                            }}
                          >
                            See Hourly
                          </Button>
                        </Box>
                      ) : null}
                    </Box>
                    <Divider orientation="vertical" flexItem />
                    <Box className={classes.content}>
                      <div className={classes.b1}>
                        {"Precipitation Probability: %"}
                        {(data.precipProbability * 100).toFixed(2)}
                      </div>
                      {data.precipType !== undefined ? (
                        <React.Fragment>
                          <div className={classes.cap}>
                            {"Precipitation Type: "}
                            <SvgIcon>
                              <WeatherIcon type={data.precipType}></WeatherIcon>
                            </SvgIcon>
                          </div>
                          <div className={classes.cap}>
                            {"Max Pricipitation: "}
                            {(data.precipIntensityMax * 25.4).toFixed(2)}
                            {"mm"}
                          </div>
                          <div className={classes.cap}>
                            {"Max Pricipitation Time: "}
                            {new Date(
                              data.precipIntensityMax * 1000
                            ).toLocaleTimeString(undefined, {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </div>
                        </React.Fragment>
                      ) : null}
                      <div className={classes.b1}>
                        {"Cloud Cover: %"}
                        {(data.cloudCover * 100).toFixed(2)}
                      </div>
                      <div className={classes.b1}>
                        {"Humidity: %"}
                        {(data.humidity * 100).toFixed(2)}
                      </div>
                      <div className={classes.b1}>
                        {"Moon Phase: "}
                        <SvgIcon>
                          <WeatherIcon type={data.moonPhase}></WeatherIcon>
                        </SvgIcon>
                      </div>
                      <div className={classes.b1}>
                        {"Dew Point: "}
                        {temperatureConverter(data.dewPoint, temperature)}
                        {temperature === "celsius" ? "℃" : "℉"}
                      </div>
                      <div className={classes.b1}>
                        {"Air Pressure: "}
                        {data.pressure} {" Millibars"}
                      </div>

                      <div className={classes.b1}>
                        {"Ozone: "}
                        {data.ozone} {" Dobson Units"}
                      </div>

                      <div className={classes.b1}>
                        {"Sunrise Time: "}
                        {new Date(data.sunriseTime * 1000).toLocaleTimeString(
                          undefined,
                          {
                            hour: "2-digit",
                            minute: "2-digit",
                          }
                        )}
                      </div>
                      <div className={classes.b1}>
                        {"Sunset Time: "}
                        {new Date(data.sunsetTime * 1000).toLocaleTimeString(
                          undefined,
                          {
                            hour: "2-digit",
                            minute: "2-digit",
                          }
                        )}
                      </div>
                      <div className={classes.b1}>
                        {"UV Index: "}
                        {data.uvIndex}
                      </div>
                      <div className={classes.cap}>
                        {"Max UV Index Time: "}
                        {new Date(data.uvIndexTime * 1000).toLocaleTimeString(
                          undefined,
                          {
                            hour: "2-digit",
                            minute: "2-digit",
                          }
                        )}
                      </div>
                      <div className={classes.b1}>
                        {"Wind Speed: "}
                        {(data.windSpeed * 1.60934).toFixed(2)}
                        {" km/hour"}
                      </div>
                    </Box>
                  </Box>
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
};
export default withRouter(DailyDetailed);
