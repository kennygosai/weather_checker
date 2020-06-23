/*
 * Filename: \weatherchecker\server.js
 * Created Date: Thursday, June 11th 2020, 2:06:40 pm
 * Author: Kenny Gosai
 *
 * Copyright (c) 2020 Kenny Gosai
 */

const { createServer } = require("http");
const express = require("express");
const compression = require("compression");
const morgan = require("morgan");
const path = require("path");
const axios = require("axios");
const app = express();
const dev = app.get("env") !== "production";
const normalizePort = (port) => parseInt(port, 10);
const PORT = process.env.PORT || 5000;
require("dotenv").config();

if (dev) {
  app.use(morgan("dev"));
}

const server = createServer(app);
app.get("/weather/:city/:country", (req, res, next) => {
  axios
    .get(
      `https://api.opencagedata.com/geocode/v1/json?q=${req.params.city}%2C%20${req.params.country}&key=${process.env.REACT_APP_OPENCAGE}`
    )
    .then(function (opencagedataResponse) {
      // handle success
      if (opencagedataResponse.data["total_results"] !== 0) {
        axios
          .get(
            `https://api.darksky.net/forecast/${process.env.REACT_APP_DARKSKY}/${opencagedataResponse.data.results[0].geometry.lat},${opencagedataResponse.data.results[0].geometry.lng}`,
            { headers: { "Access-Control-Allow-Origin": true } }
          )
          .then(function (response) {
            // handle success
            res.send({
              ...response.data,
              formatted: opencagedataResponse.data.results[0].formatted,
            });
          })
          .catch(function (error) {
            // handle error
            next(error);
          });
      } else {
        next("No results");
      }
    })
    .catch(function (error) {
      // handle error
      next(error);
    });
});
if (!dev) {
  app.disable("x-powered-by");
  app.use(compression());
  app.use(morgan("common"));

  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "client\buildindex.html"));
  });
}

server.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Example app listening at ${PORT}`);
});
