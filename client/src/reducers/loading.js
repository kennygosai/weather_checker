const loadingReducer = (state = false, action) => {
    switch (action.type) {
      case "LOADUPDATE":
        return action.payload;
      default:
        return state;
    }
  };
  export default loadingReducer;