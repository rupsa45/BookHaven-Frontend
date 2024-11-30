import axiosInstance from "./axiosConfig";
const API_BASE_URL=import.meta.env.VITE_API_BASE_URL;

export const createUser = async (username, email, password) => {
  try {
    const response = await axiosInstance.post(`${API_BASE_URL}/users`, {
      username,
      email,
      password,
    });
    return response.data; 
  } catch (error) {
    console.error("Error creating user:", error.response?.data || error.message);
    throw error; 
  }
};

export const login = async (username, password) => {
  try {
    const response = await axiosInstance.post("/users/login", {
      username,
      password,
    });
    return response.data; 
  } catch (error) {
    console.error("Error creating user:", error.response?.data || error.message);
    throw error; 
  }
};
