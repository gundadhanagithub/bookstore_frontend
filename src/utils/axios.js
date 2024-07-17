import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://bookstore-alb-1486648234.us-east-2.elb.amazonaws.com/",
  // baseURL: "http://localhost:8000/",
  timeout: 1000,
  headers: {},
});

axiosInstance.defaults.withCredentials = true;
export default axiosInstance;
