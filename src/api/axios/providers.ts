import axios from "axios";
const ApiAxios = axios.create({
  baseURL: "http://177.85.114.132:9090/",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

export default ApiAxios;
