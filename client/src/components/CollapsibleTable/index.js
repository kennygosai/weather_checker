/*
 * Filename: \src\components\CollapsibleTable\index.js
 * Created Date: Monday, June 15th 2020, 12:14:24 pm
 * Author: Kenny Gosai
 *
 */

import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Table,
  Collapse,
  IconButton,
  TableBody,
  TableCell,
  SvgIcon,
  TableContainer,
  TableRow,
  Paper,
} from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import WeatherIcon from "../../components/WeatherIcon/index.js";
import { temperatureConverter } from "../../js/temperature.js";

const useRowStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
  cap: {
    ...theme.typography.caption,
  },
  b1: {
    ...theme.typography.body1,
  },
  dispFlex: {
    display: "flex",
    justifyContent: "space-around",
  },
}));

/**
 * Component for displaying table for each hour.
 *
 * @component
 * @example
 * const row = {
 *    "time": 1592053200,
 *    "summary": "Clear",
 *    "icon": "clear-day",
 *    "precipIntensity": 0.0004,
 *    "precipProbability": 0.01,
 *    "precipType": "rain",
 *    "temperature": 53.77,
 *    "apparentTemperature": 53.77,
 *    "dewPoint": 36.54,
 *    "humidity": 0.52,
 *    "pressure": 1027.4,
 *    "windSpeed": 7.46,
 *    "windGust": 14.78,
 *    "windBearing": 357,
 *    "cloudCover": 0.31,
 *    "uvIndex": 2,
 *    "visibility": 10,
 *    "ozone": 360.6
 *  }
 * const temperature = "celsius"
 * return (
 *   <Row=
 *      row={row}
 *      temperature={temperature}
 *    />
 * )
 */
function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {new Date(row.time * 1000).toLocaleTimeString(undefined, {
            hour: "2-digit",
            minute: "2-digit",
            day: "numeric",
            month: "numeric",
          })}
        </TableCell>
        <TableCell align="right">
          <SvgIcon>
            <WeatherIcon type={row.icon}></WeatherIcon>
          </SvgIcon>
        </TableCell>
        <TableCell align="right">
          {temperatureConverter(row.temperature, props.temperature)}
          {props.temperature === "celsius" ? "℃" : "℉"}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box className={classes.dispFlex} margin={1}>
              <Box>
                <div className={classes.b1}>
                  {"Summary: "}
                  {row.summary}
                </div>
                <div className={classes.b1}>
                  {"Precipitation Probability: %"}
                  {row.precipProbability * 100}
                </div>
                {row.precipType !== undefined ? (
                  <React.Fragment>
                    <div className={classes.cap}>
                      {"Precipitation Type: "}
                      <SvgIcon>
                        <WeatherIcon type={row.precipType}></WeatherIcon>
                      </SvgIcon>
                    </div>
                    <div className={classes.cap}>
                      {"Precipitation Intensity: "}
                      {(row.precipIntensity * 25.4).toFixed(2)}
                      {"mm"}
                    </div>
                  </React.Fragment>
                ) : null}
                <div className={classes.b1}>
                  {"Cloud Cover: %"}
                  {row.cloudCover * 100}
                </div>
                <div className={classes.b1}>
                  {"Dew Point: "}
                  {temperatureConverter(row.dewPoint, props.temperature)}
                  {props.temperature === "celsius" ? "℃" : "℉"}
                </div>
                <div className={classes.b1}>
                  {"Humidity: %"}
                  {(row.humidity * 100).toFixed(0)}
                </div>
              </Box>
              <Box>
                <div className={classes.b1}>
                  {"Feels Like: "}
                  {temperatureConverter(
                    row.apparentTemperature,
                    props.temperature
                  )}
                  {props.temperature === "celsius" ? "℃" : "℉"}
                </div>
                <div className={classes.b1}>
                  {"Ozone: "}
                  {row.ozone} {" Dobson Units"}
                </div>
                <div className={classes.b1}>
                  {"Air Pressure: "}
                  {row.pressure} {" Millibars"}
                </div>
                <div className={classes.b1}>
                  {"UV Index: "}
                  {row.uvIndex}
                </div>
                <div className={classes.b1}>
                  {"Wind Speed: "}
                  {(row.windSpeed * 1.60934).toFixed(2)}
                  {" km/hour"}
                </div>
                {row.windSpeed !== 0 ? (
                  <div className={classes.b1}>
                    {"Wind Bearing: "}
                    {row.windBearing}
                    {"°"}
                  </div>
                ) : null}
                <div className={classes.b1}>
                  {"Wind Gusts: "}
                  {(row.windGust * 1.60934).toFixed(2)}
                  {" km/hour"}
                </div>
              </Box>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  temperature: PropTypes.string,
  row: PropTypes.shape({
    time: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    precipIntensity: PropTypes.number,
    precipProbability: PropTypes.number.isRequired,
    precipType: PropTypes.string,
    temperature: PropTypes.number.isRequired,
    apparentTemperature: PropTypes.number.isRequired,
    dewPoint: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    pressure: PropTypes.number.isRequired,
    windSpeed: PropTypes.number.isRequired,
    windGust: PropTypes.number.isRequired,
    windBearing: PropTypes.number,
    cloudCover: PropTypes.number.isRequired,
    uvIndex: PropTypes.number.isRequired,
    visibility: PropTypes.number.isRequired,
    ozone: PropTypes.number.isRequired,
  }),
};

/**
 * Component for displaying table for each hour.
 *
 * @component
 * @example
 * const data = [{
 *    "time": 1592053200,
 *    "summary": "Clear",
 *    "icon": "clear-day",
 *    "precipIntensity": 0.0004,
 *    "precipProbability": 0.01,
 *    "precipType": "rain",
 *    "temperature": 53.77,
 *    "apparentTemperature": 53.77,
 *    "dewPoint": 36.54,
 *    "humidity": 0.52,
 *    "pressure": 1027.4,
 *    "windSpeed": 7.46,
 *    "windGust": 14.78,
 *    "windBearing": 357,
 *    "cloudCover": 0.31,
 *    "uvIndex": 2,
 *    "visibility": 10,
 *    "ozone": 360.6
 *  }]
 * return (
 *   <CollapsibleTable data={data} />
 * )
 */
function CollapsibleTable(props) {
  const temperature = useSelector((state) => state.temperature);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableBody>
          {Object.keys(props.data).map((row) => (
            <Row
              key={props.data[row].time}
              row={props.data[row]}
              temperature={temperature}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
CollapsibleTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.number.isRequired,
      summary: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      precipIntensity: PropTypes.number,
      precipProbability: PropTypes.number.isRequired,
      precipType: PropTypes.string,
      temperature: PropTypes.number.isRequired,
      apparentTemperature: PropTypes.number.isRequired,
      dewPoint: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
      pressure: PropTypes.number.isRequired,
      windSpeed: PropTypes.number.isRequired,
      windGust: PropTypes.number.isRequired,
      windBearing: PropTypes.number,
      cloudCover: PropTypes.number.isRequired,
      uvIndex: PropTypes.number.isRequired,
      visibility: PropTypes.number.isRequired,
      ozone: PropTypes.number.isRequired,
    })
  ),
};
export default CollapsibleTable;
