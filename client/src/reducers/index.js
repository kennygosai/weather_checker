/*
 * Filename: d:\Documents\Github\weatherchecker\client\src\reducers\index.js
 * Path: d:\Documents\Github\weatherchecker\client
 * Created Date: Sunday, June 14th 2020, 8:59:15 am
 * Author: Kenny Gosai
 * 
 * Copyright (c) 2020 Your Company
 */

import dataReducer from "./data";
import temperatureReducer from './temperature'
import loadingReducer from './loading'
import { combineReducers } from "redux";

/**
 * This combines all reducers
 * @return {Reducer}
 */
const allReducers = combineReducers({
  data: dataReducer,
  temperature: temperatureReducer,
  loading: loadingReducer
});

export default allReducers;