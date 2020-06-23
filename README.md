
<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/kennygosai/weather_checker/">
    <img src="https://github.com/kennygosai/weather_checker/blob/master/client/src/assets/icons/weatherchecker.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Weather Checker</h3>

  <p align="center">
    A web application which gives the daily and hourly weather forecast of a given location.
    <br />
    <a href="https://github.com/kennygosai/weather_checker"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://kennysweatherchecker.herokuapp.com/">View Website</a>
    ·
    <a href="https://github.com/kennygosai/weather_checker/issues">Report Bug</a>
    ·
    <a href="https://github.com/kennygosai/weather_checker/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://kennysweatherchecker.herokuapp.com/)


### Built With

* [Material-UI](https://material-ui.com/)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites
* npm
```sh
npm install npm@latest -g
```

### Installation
 
1. Clone the repo
```sh
git clone https://github.com/kennygosai/weather_checker.git
```
2. Install NPM packages
```sh
cd weather_checker
npm install
cd client
npm install
```
3. Enter your API in `.env`
[OpenCage](https://opencagedata.com/api)
[DarkSky](https://darksky.net/dev)
```sh
REACT_APP_OPENCAGE = "your_key"
REACT_APP_DARKSKY = "your_key"
```
To start without keys change line 18 in /client/src/reducers/data.js from
```js
const dataReducer = (state = [], action) => {
```
to
```js
const dataReducer = (state = testdata, action) => {
```
4. Start the server (in root directory)
```sh
npm start
```
5. Start the client
```sh
cd client
npm start
```

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/kennygosai/weather_checker/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- CONTACT -->
## Contact

[Kenny Gosai](https://kennygosai.com/#contact)

Project Link: [https://github.com/kennygosai/weather_checker](https://github.com/kennygosai/weather_checker)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [Weather Icons](https://erikflowers.github.io/weather-icons/)





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=flat-square
[contributors-url]: https://github.com/kennygosai/weather_checker/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=flat-square
[forks-url]: https://github.com/kennygosai/weather_checker/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=flat-square
[stars-url]: https://github.com/kennygosai/weather_checker/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=flat-square
[issues-url]: https://github.com/kennygosai/weather_checker/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/kenny-gosai-a27030187/
[product-screenshot]: images/screenshot.png