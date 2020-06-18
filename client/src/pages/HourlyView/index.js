import React from "react";
import { useSelector } from "react-redux";
import LocationForm from "../../components/locationForm";
import { Divider, Box, Typography, Paper, IconButton, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CollapsibleTable from "../../components/CollapsibleTable";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { withRouter } from "react-router-dom";

const HourlyView = (props) => {
  const results = useSelector((state) => state.data);
  const useStyles = makeStyles((theme) => ({
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
      //   textAlign:'left'
    },
    loadingContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      margin: theme.spacing(3)
    },
    paperContainer: {
      margin: theme.spacing(1),
      [theme.breakpoints.down("sm")]: {
        width: 320,
      },
      ["@media (min-width: 768px) and (max-width: 1199px)"]: {
        width: 592,
      },
      ["@media (min-width: 1200px)"]: {
        width: 1184,
      },
    },
  }));
  const classes = useStyles();
  const loading = useSelector((state) => state.loading);

  return (
    <React.Fragment>
      <LocationForm></LocationForm>
      <Divider></Divider>
      {!loading ? (
        results.length !== 0 ? <React.Fragment>
          <Box className={classes.locationText}>
            <Typography variant="h4" gutterBottom>
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
        </React.Fragment> : null
      ) : (
        <Box className={classes.loadingContainer}>
          <CircularProgress></CircularProgress>
        </Box>
      )}
    </React.Fragment>
  );
};
export default withRouter(HourlyView);
