/*
 * Filename: \client\src\index.js
 * Created Date: Thursday, June 11th 2020, 8:44:51 am
 * Author: Kenny Gosai
 * 
 * Copyright (c) 2020 Kenny Gosai
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore } from "redux";
import { Provider } from "react-redux";
import allReducer from "./reducers";
import Routes from './routes';
const store = createStore(
  allReducer
);
ReactDOM.render(
  <Provider store={store}>
    <Routes></Routes>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
