import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://dev.bhcjobs.com",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use((config) => {
  const token = "your-token-here";
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosClient;
