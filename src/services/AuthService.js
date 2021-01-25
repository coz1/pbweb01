import axios from 'axios';

const url = 'http://localhost:8085/';
export default {
  login(credentials) {
    console.log(credentials);
    return axios
      .post(`${url}auth`, credentials)
      .then((response) => response.data);
  },
  signUp(credentials) {
    return axios
      .post(`${url}sign-up/`, credentials)
      .then((response) => response.data);
  },
  getSecretContent() {
    return axios.get(`${url}protected/`).then((response) => response.data);
  },
};
