import request from "superagent";

const baseUrl = "https://whispering-stream-09691.herokuapp.com";

export const getJwt = jwt => ({
  type: "GET_JWT",
  payload: jwt
});

export const newUser = payload => ({
  type: "NEW_USER",
  payload
});

export const login = (mail, pass) => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send({ email: mail, password: pass })
    .then(response => {
      const action = getJwt(response.body.jwt);
      dispatch(action);
    })
    .catch(error => console.log(error));
};

export const createUser = data => dispatch => {
  request
    .post(`${baseUrl}/user`)
    .send(data)
    .then(response => {
      const action = newUser(response.body.email);
      dispatch(action);
    });
};
