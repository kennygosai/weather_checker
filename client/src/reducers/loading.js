/*
 * Filename: d\client\src\reducers\loading.js
 * Created Date: Tuesday, June 16th 2020, 3:52:21 pm
 * Author: Kenny Gosai
 * 
 * Copyright (c) 2020 Kenny Gosai
 */

 /**
 * This reducers enables the loading circle when the state = true.
 *
 * @param {boolean} state
 * @param {string} action
 */
const loadingReducer = (state = false, action) => {
    switch (action.type) {
      case "LOADUPDATE":
        return action.payload;
      default:
        return state;
    }
  };
  export default loadingReducer;