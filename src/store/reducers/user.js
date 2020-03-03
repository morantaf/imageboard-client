const initialState = {
  user: "",
  newUser: ""
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_JWT":
      return { ...state, user: payload };
    case "NEW_USER":
      return { ...state, newUser: payload };
    default:
      return state;
  }
};
