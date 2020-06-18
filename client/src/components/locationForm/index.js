import React, { useState } from "react";
import CountrySelect from "../../components/CountrySelect";
import { Box, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ToggleButtons from "../ToggleButtons";
import {  useDispatch } from "react-redux";
import Cookies from "universal-cookie";
import CustomizedSnackbars from "../CustomizedSnackbars";
const axios = require("axios");
const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  mainContainer: {
    height: "50vh",
    ["@media (min-height: 1024px) and (max-height: 1366px)"]: {
      height: "34vh",
    },
  },
  toggleinput: {
    marginTop: theme.spacing(1),
    marginLeft: theme.spacing(1),
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
  svg: {
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
}));
/**
 * Form which handles the input of the city cand country
 *
 * @component
 * @example
 * return (
 *   <LocationForm />
 * )
 */
function LocationForm() {
  
  const classes = useStyles();
  const cookies = new Cookies();
  const [city, setCity] = useState(
    cookies.get("city") !== undefined ? cookies.get("city") : ""
  );
  const [country, setCountry] = useState(
    cookies.get("country") !== undefined
      ? cookies.get("country")
      : { values: {} }
  );
  const [error, setError] = useState("");
  const dispatch = useDispatch(); //used to change redux data

  const getData = () => {
    if (city !== "" && country.values.label !== undefined) {
      dispatch({ type: "LOADUPDATE", payload: true }); //update redux
      fetch(`/weather/${city}/${country.values.label}`)
        .then(function (res) {
          // handle success
          console.log(res)
          
          return res.json()
        }).then((res2) => {
          console.log(res2)
          dispatch({ type: "UPDATE", payload: {data: res2} }); //update redux
          cookies.set("city", city, { path: "/" });
          cookies.set("country", country, { path: "/" });
          dispatch({ type: "LOADUPDATE", payload: false }); //update redux
        })
        .catch(function (error) {
          // handle error
          setError("There was an error communicating to the server");
        });
    } else {
      setError("Please fill out all fields!");
    }
  };
  return (
    <Box className={classes.mainContainer}>
      <Box className={classes.toggleinput}>
        <ToggleButtons></ToggleButtons>
      </Box>
      <Box className={classes.container}>
        <img
          className={classes.svg}
          src={require("../../assets/icons/weatherchecker.png")}
        ></img>
        <TextField
          id="outlined-search"
          label="Enter City"
          type="search"
          variant="outlined"
          className={classes.cityInput}
          value={city}
          onChange={(event) => {
            setCity(event.target.value);
          }}
        />
        <CountrySelect
          country={{ tags: country }}
          change={(val) => setCountry(val)}
        ></CountrySelect>
        <Button
          variant="contained"
          color="primary"
          onClick={getData}
          className={classes.buttonInput}
        >
          Check Weather
        </Button>
      </Box>
      {error !== "" ? (
        <CustomizedSnackbars
          text={error}
          change={(text) => setError(text)}
        ></CustomizedSnackbars>
      ) : null}
    </Box>
  );
};
export default LocationForm;
