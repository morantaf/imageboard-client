import request from "superagent";

const baseUrl = "https://whispering-stream-09691.herokuapp.com";

const allImages = payload => ({
  type: "ALL_IMAGES",
  payload
});

const newImage = payload => ({
  type: "NEW_IMAGE",
  payload
});

export const getImages = () => (dispatch, getState) => {
  const state = getState();
  const { images } = state;

  if (!images.length) {
    request(`${baseUrl}/images`)
      .then(response => {
        const action = allImages(response.body);
        dispatch(action);
      })
      .catch(console.error);
  }
};

export const createImage = data => (dispatch, getState) => {
  const state = getState();
  const { user } = state;
  request
    .post(`${baseUrl}/images`)
    .set("Authorization", `Bearer ${user}`)
    .send(data)
    .then(response => {
      const action = newImage(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
