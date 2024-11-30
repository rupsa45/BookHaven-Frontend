import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const uploadBook = async (formData, toast) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/books`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if (toast) {
      toast.success('Book uploaded successfully!');
    }
    return response.data;
  } catch (error) {
    if (toast) {
      toast.error('Error uploading book!');
    }
    console.error('Error uploading book:', error);
    // Return error details for caller to handle
    return { error: error.response?.data || 'Unknown error occurred' };
  }
};
