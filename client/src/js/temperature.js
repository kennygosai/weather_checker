/*
 * Filename: \client\src\js\temperature.js
 * Created Date: Tuesday, June 16th 2020, 11:46:02 am
 * Author: Kenny Gosai
 * 
 * Copyright (c) 2020 Kenny Gosai
 */

/**
 * @param {number} temp - temperature in fahrenheit.
 * @param {string} type - temperature unit
 * @returns {number}
 */
export const temperatureConverter = (temp, type) => {
    if(type === "celsius"){
        return (((temp-32)*(5/9)).toFixed(2))
    } else {
        return temp;
    }
}