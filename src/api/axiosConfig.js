import axios from "axios";

// Create Axios instance for API requests
const API_BASE_URL=import.meta.env.VITE_API_BASE_URL;
const axiosInstance = axios.create({
  baseURL: `${API_BASE_URL}`, 
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor to add token to the headers
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // Get token from localStorage
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Add token to request headers
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor for token expiration handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("token"); 
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
