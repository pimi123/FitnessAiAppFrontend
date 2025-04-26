import axios from "axios";

const api = axios.create({
  baseURL: "https://192.168.1.7/api",
  timeout: 10000,
});
