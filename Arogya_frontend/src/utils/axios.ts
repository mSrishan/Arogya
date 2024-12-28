// src/utils/axios.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000", // Adjust the base URL as needed
});

export default axiosInstance;
