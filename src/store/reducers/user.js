const initialState = "";

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_JWT":
      return payload;

    default:
      return state;
  }
};
