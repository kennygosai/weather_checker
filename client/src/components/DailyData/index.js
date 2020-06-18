/*
 * Filename: \src\components\DailyData\index.js
 * Created Date: Friday, June 12th 2020, 10:02:51 am
 * Author: Kenny Gosai
 */

import React from "react";
import { Button, Box, SvgIcon } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { indigo } from "@material-ui/core/colors";
import { days } from "../../constants/days";
import WeatherIcon from "../WeatherIcon";
import { temperatureConverter } from "../../js/temperature";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

/**
 * Button displays the high temperature and low temperature of a day
 *
 * @component
 * @example
 * const data = {
 *  temperatureHigh: 58,
 *  temperatureLow: 36,
 * }),
 * const click = () => {
 *  //handleChange
 * },
 * return (
 *   <DailyData =
 *      data={data}
 *      click={click}
 *    />
 * )
 */
const DailyData = (props) => {
  const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText(indigo[500]),
      backgroundColor: indigo[500],
      height: 200,
      "&:hover": {
        backgroundColor: indigo[700],
      },
    },
  }))(Button);

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },
    svg: {
      height: 100,
      width: 100,
    },
  }));
  const classes = useStyles();
  const data = props.data;
  const temperature = useSelector((state) => state.temperature);
  return (
    <Box>
      <ColorButton
        variant="contained"
        color="primary"
        className={classes.margin}
        onClick={props.click}
      >
        <Box>
          <div>{days[new Date(data.time * 1000).getDay()]}</div>
          <SvgIcon className={classes.svg}>
            <WeatherIcon type={data.icon}></WeatherIcon>
          </SvgIcon>
          <div>
            High: {temperatureConverter(data.temperatureHigh, temperature)}
            {temperature === "celsius" ? "℃" : "℉"}
          </div>
          <div>
            Low: {temperatureConverter(data.temperatureLow, temperature)}
            {temperature === "celsius" ? "℃" : "℉"}
          </div>
        </Box>
      </ColorButton>
    </Box>
  );
};
DailyData.propTypes = {
  data: PropTypes.shape({
    temperatureHigh: PropTypes.number.isRequired,
    temperatureLow: PropTypes.number.isRequired,
  }),
  click: PropTypes.func.isRequired,
};
export default DailyData;
