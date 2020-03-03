const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ALL_IMAGES":
      return payload;
    case "NEW_IMAGE":
      return [payload, ...state];

    default:
      return state;
  }
};
