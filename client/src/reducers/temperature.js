// import { testdata } from "../assets/test/data";

const temperatureReducer = (state = 'celsius', action) => {
    switch (action.type) {
      case "TEMPUPDATE":
        return action.payload;
      default:
        return state;
    }
  };
  export default temperatureReducer;