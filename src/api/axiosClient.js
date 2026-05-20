import { getToken } from "@/utils/tokenStorage";
import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://dev.bhcjobs.com",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(async (config) => {
  const token = await getToken();
  console.log("Attaching token to request:", token);
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default axiosClient;
