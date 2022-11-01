const axios = require("axios");

const config = {
  baseURL: `${process.env.REACT_APP_BASE_URL}/api`, //hom sau them https vao sau tls
  //   timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
};
const AxiosInstance = axios.create(config);
export default AxiosInstance;
