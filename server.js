const { createServer } = require("http");
const express = require("express");
const compression = require("compression");
const morgan = require("morgan");
const path = require("path");
const axios = require("axios");
const app = express();
const dev = app.get("env") !== "production";
const normalizePort = (port) => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 5000);
require('dotenv').config()



if (dev) {
  app.use(morgan("dev"));
}
const server = createServer(app);
app.get("/weather/:city/:country", (req, res, next) => {
  console.log(process.env.REACT_APP_OPENCAGE)
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  axios
    .get(
      `https://api.opencagedata.com/geocode/v1/json?q=${req.params.city}%2C%20${req.params.country}&key=${process.env.REACT_APP_OPENCAGE}`
    )
    .then(function (opencagedataResponse) {
      // handle success
      //   console.log(opencagedataResponse)
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
            //   res.send(200)
          })
          .catch(function (error) {
            // handle error
            //   res.send(400);
            next(error);
          });
      } else {
        next("No results");
      }
    })
    .catch(function (error) {
      // handle error
      //   res.send(400);

      next(error);
    });
});
if (!dev) {
  app.disable("x-powered-by");
  app.use(compression());
  app.use(morgan("common"));

  app.use(express.static(path.resolve(__dirname, "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}
server.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Example app listening at ${PORT}`);
});
