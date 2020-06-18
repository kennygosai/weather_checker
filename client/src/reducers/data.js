import { testdata } from "../assets/test/data";

const dataReducer = (state = [], action) => {
    switch (action.type) {
      case "UPDATE":
        return action.payload;
      default:
        return state;
    }
  };
  export default dataReducer;