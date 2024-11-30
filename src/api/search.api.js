import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * Search books by title, author, and/or category.
 * @param {string} title - Search by book title (optional).
 * @returns {Promise<Array>} - Array of books matching the search criteria.
 */
export const searchBooks = async (title = '') => {
  try {
    const response = await axios.get(`${API_BASE_URL}/books/search/${title}`);
    return response.data; 
  } catch (error) {
    console.error("Error searching books:", error);
    throw error; // Forward error for UI handling
  }
};
