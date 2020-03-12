const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ALL_IMAGES":
      return payload;
    case "NEW_IMAGE":
      return [payload, ...state];
    case "REMOVE_IMAGE":
      return state.filter(image => image.id !== payload);
    case "IMAGES_BY_USER":
      return payload;
    case "UPDATE_IMAGE":
      return state.map(image => (image.id === payload.id ? payload : image));

    default:
      return state;
  }
};
