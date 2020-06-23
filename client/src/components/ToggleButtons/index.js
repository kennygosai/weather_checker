/*
 * Filename: \src\components\ToggleButtons\index.js
 * Created Date: Tuesday, June 16th 2020, 8:38:59 am
 * Author: Kenny Gosai
 * 
 * Copyright (c) 2020 Kenny Gosai
 */

import React from "react";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
/**
 *A toggle to switch between Celsius and Fahrenheit
 *
 * @component
 * @example
 * return (
 *   <ToggleButtons />
 * )
 */
export default function ToggleButtons() {
  const alignment = useSelector((state) => state.temperature);
  const dispatch = useDispatch(); //used to change redux data
  const handleAlignment = (event, newAlignment) => {
    dispatch({ type: "TEMPUPDATE", payload: newAlignment }); //update redux
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="celsius" aria-label="left aligned">
        <Typography component="div">℃</Typography>
      </ToggleButton>
      <ToggleButton value="fahrenheit" aria-label="centered">
        <Typography component="div">℉</Typography>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
