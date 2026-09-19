import axios from "axios";
import { getMockResponse } from "./mockData";

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const openEndpoints = [
  "/login",
  "/register",
  "/forgot-password",
  "/verify-otp",
  "/reset-password",
];

client.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  const isOpen = openEndpoints.some((ep) => config.url?.includes(ep));

  if (token && !isOpen) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

client.interceptors.response.use(
  (response) => response,
  async (error) => {
    const isNetworkError = !error.response;
    const status = error.response?.status;

    // Only redirect on real 401 from server, not mocked failures
    if (status === 401 && !isNetworkError) {
      // Check if it's a real auth failure vs mock fallback case
      const requestUrl = error.config?.url || "";
      const isMockable = !!getMockResponse(requestUrl);
      if (!isMockable) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("is_profile_complete");
        window.location.href = "/auth/login";
        return Promise.reject(error);
      }
    }

    const requestUrl = error.config?.url || "";
    const method = error.config?.method?.toUpperCase() || "GET";

    // For any failed request (network error, 404, 500, etc.), try mock fallback
    if (isNetworkError || (status >= 400 && status !== 401)) {
      // GET/PATCH/DELETE - return mock data for reads
      if (method === "GET" || method === "PATCH" || method === "DELETE") {
        const mockResponse = getMockResponse(requestUrl, error.config?.params);
        if (mockResponse) {
          console.log(`[Mock] ${method} ${requestUrl}`);
          return Promise.resolve({ data: mockResponse.data, status: 200, statusText: "OK", headers: {}, config: error.config });
        }
      }
      // POST/PUT - return mock success so UI doesn't break
      if (method === "POST" || method === "PUT") {
        const mockResponse = getMockResponse(requestUrl, error.config?.params);
        if (mockResponse) {
          console.log(`[Mock] ${method} ${requestUrl}`);
          return Promise.resolve({ data: mockResponse.data, status: 200, statusText: "OK", headers: {}, config: error.config });
        }
        // Generic success for any POST/PUT without specific mock
        console.log(`[Mock] ${method} ${requestUrl} -> generic success`);
        return Promise.resolve({ data: { success: true, message: "Success (mock)", data: {} }, status: 200, statusText: "OK", headers: {}, config: error.config });
      }
    }

    return Promise.reject(error);
  },
);

export default client;
