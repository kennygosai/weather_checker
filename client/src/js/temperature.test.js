import {temperatureConverter} from "./temperature.js"

test('checks celsius', () => {
    expect(temperatureConverter(50,"celsius")).toBe("10.00")
});

test('checks farenheit', () => {
    expect(temperatureConverter(50,"farenheit")).toBe("50.00")
});
  