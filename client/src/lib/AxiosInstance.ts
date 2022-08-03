const axios = require("axios");

const config = {
  baseURL: "https://localhost:3080/api", //hom sau them https vao sau tls
  //   timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
};
const AxiosInstance = axios.create(config);
export default AxiosInstance;
