/*
 * Filename: d:\Documents\Github\weatherchecker\client\src\reducers\temperature.js
 * Created Date: Tuesday, June 16th 2020, 11:52:01 am
 * Author: Kenny Gosai
 * 
 * Copyright (c) 2020 Kenny Gosai
 */

  /**
 * This reducers stores whether the unit should be
 * celsius or fahrenheit.
 *
 * @param {string} state
 * @param {string} action
 */
const temperatureReducer = (state = 'celsius', action) => {
    switch (action.type) {
      case "TEMPUPDATE":
        return action.payload;
      default:
        return state;
    }
  };
  export default temperatureReducer;