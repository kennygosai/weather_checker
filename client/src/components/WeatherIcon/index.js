/*
 * Filename: \client\src\components\WeatherIcon\index.js
 * Created Date: Saturday, June 13th 2020, 8:34:48 am
 * Author: Kenny Gosai
 * 
 * Copyright (c) 2020 Kenny Gosai
 */

import React from "react";

// <---------- svg icons ---------->
import { ReactComponent as Cloudy } from "../../assets/icons/wi-cloudy.svg";
import { ReactComponent as CloudyDay } from "../../assets/icons/wi-day-cloudy.svg";
import { ReactComponent as SunnyDay } from "../../assets/icons/wi-day-sunny.svg";
import { ReactComponent as Fog } from "../../assets/icons/wi-fog.svg";
import { ReactComponent as CloudyNight } from "../../assets/icons/wi-night-alt-cloudy.svg";
import { ReactComponent as ClearNight } from "../../assets/icons/wi-night-clear.svg";
import { ReactComponent as Rain } from "../../assets/icons/wi-rain.svg";
import { ReactComponent as Sleet } from "../../assets/icons/wi-sleet.svg";
import { ReactComponent as Snow } from "../../assets/icons/wi-snow.svg";
import { ReactComponent as Windy } from "../../assets/icons/wi-windy.svg";
import { ReactComponent as Hail } from "../../assets/icons/wi-hail.svg";
import { ReactComponent as ThunderStorm } from "../../assets/icons/wi-thunderstorm.svg";
import { ReactComponent as Tornado } from "../../assets/icons/wi-tornado.svg";
import { ReactComponent as NewMoon } from "../../assets/icons/wi-moon-new.svg";
import { ReactComponent as WaxCres } from "../../assets/icons/wi-moon-waxing-crescent-1.svg";
import { ReactComponent as FirstQuarter } from "../../assets/icons/wi-moon-first-quarter.svg";
import { ReactComponent as WaxGib } from "../../assets/icons/wi-moon-waxing-gibbous-1.svg";
import { ReactComponent as FullMoon } from "../../assets/icons/wi-moon-full.svg";
import { ReactComponent as WanGib } from "../../assets/icons/wi-moon-waning-gibbous-1.svg";
import { ReactComponent as ThirdQuarter } from "../../assets/icons/wi-moon-third-quarter.svg";
import { ReactComponent as WanCres } from "../../assets/icons/wi-moon-waning-crescent-1.svg";

/**
 * Displays icon depending on the property
 *
 * @component
 * @example
 * const type = "clear-day";
 * return (
 *   <WeatherIcon type = {type} />
 * )
 */
 const WeatherIcon = (props) => {
  const returnIcon = (type) => {
    if (type === "clear-day") {
      return <SunnyDay></SunnyDay>;
    } else if (type === "clear-night") {
      return <ClearNight></ClearNight>;
    } else if (type === "rain") {
      return <Rain></Rain>;
    } else if (type === "snow") {
      return <Snow></Snow>;
    } else if (type === "sleet") {
        return <Sleet></Sleet>;
      } else if (type === "wind") {
        return <Windy></Windy>;
      } else if (type === "fog") {
        return <Fog></Fog>;
      } else if (type === "cloudy") {
        return <Cloudy></Cloudy>;
      } else if (type === "partly-cloudy-day") {
        return <CloudyDay></CloudyDay>;
      } else if (type === "partly-cloudy-night") {
        return <CloudyNight></CloudyNight>;
      } else if (type === "thunderstorm") {
        return <ThunderStorm></ThunderStorm>;
      } else if (type === "tornado") {
        return <Tornado></Tornado>;
      }  else if (type === "hail") {
        return <Hail></Hail>;
      } else if (type === 0) {
        return <NewMoon></NewMoon>;
      } else if (type > 0 && type < 0.25) {
        return <WaxCres></WaxCres>;
      } else if (type === 0.25) {
        return <FirstQuarter></FirstQuarter>;
      } else if (type > 0.25 && type < 0.5) {
        return <WaxGib></WaxGib>;
      } else if (type === 0.5) {
        return <FullMoon></FullMoon>;
      } else if (type > 0.5 && type < 0.75) {
        return <WanGib></WanGib>;
      } else if (type === 0.75) {
        return <ThirdQuarter></ThirdQuarter>;
      } else if (type > 0.75 && type <= 1) {
        return <WanCres></WanCres>;
      }
  };
  return(
    returnIcon(props.type)
  );
};
export default WeatherIcon;