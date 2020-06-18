import dataReducer from "./data";
import temperatureReducer from './temperature'
import loadingReducer from './loading'
import { combineReducers } from "redux";

const allReducers = combineReducers({
  data: dataReducer,
  temperature: temperatureReducer,
  loading: loadingReducer
});

export default allReducers;