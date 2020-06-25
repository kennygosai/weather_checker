/*
 * Filename: \client\src\reducers\data.js
 * Created Date: Sunday, June 14th 2020, 9:05:52 am
 * Author: Kenny Gosai
 * 
 * Copyright (c) 2020 Kenny Gosai
 */

import { testdata } from "../assets/test/data";

/**
 * This reducers is for all of the weather location data
 *
 * @param {json} state
 * @param {string} action
 */

const dataReducer = (state = testdata, action) => {
    switch (action.type) {
      case "UPDATE":
        return action.payload;
      default:
        return state;
    }
  };
  export default dataReducer;