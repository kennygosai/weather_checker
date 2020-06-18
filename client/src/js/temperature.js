export const temperatureConverter = (temp, type) => {
    if(type === "celsius"){
        return (((temp-32)*(5/9)).toFixed(2))
    } else {
        return temp;
    }
}