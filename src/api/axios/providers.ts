import axios from "axios";
const ApiAxios = axios.create({
  baseURL: "http://localhost:9090/",
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

export default ApiAxios;
