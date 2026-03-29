import axios from "axios";

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

client.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  const openEndpoints = [
    "/login",
    "/register",
    "/forgot-password",
    "/verify-otp",
    "/reset-password",
  ];
  const isOpen = openEndpoints.some((ep) => config.url?.includes(ep));

  if (token && !isOpen) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default client;
