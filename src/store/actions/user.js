import request from "superagent";

const baseUrl = "https://whispering-stream-09691.herokuapp.com";

export const getJwt = jwt => {
  console.log("action creater with", jwt);

  return {
    type: "GET_JWT",
    payload: jwt
  };
};

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
