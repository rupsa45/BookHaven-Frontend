import { useState, useEffect } from "react";
import BookCard from "../../Components/BookCards";
import { useLocation } from "react-router-dom"; // Import useLocation to access passed state
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const BookList = () => {
  const [books, setBooks] = useState([]); // State to store books
  const [loading, setLoading] = useState(true); // State to handle loading
  const [error, setError] = useState(null); // State to handle errors

  const location = useLocation(); // Get the current location
  const searchResults = location.state?.searchResults || null; // Get search results from state (if passed)

  // Fetch all books if no search results are provided
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = searchResults
          ? { data: searchResults } // If search results exist, use them
          : await axios.get(`${API_BASE_URL}/books`); 

        console.log("Books fetched:", response.data); 
        setBooks(response.data); 
      } catch (error) {
        console.error("Error fetching books:", error);
        setError("Failed to fetch books. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [searchResults]); // If searchResults changes, fetch new books

  return (
    <div className="p-6">
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-center mb-10 text-purple-800">
        Explore Our Collection of Books
      </h1>

      {/* Loading State */}
      {loading && <p className="text-center text-blue-500">Loading books...</p>}

      {/* Error State */}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Book Cards */}
      {!loading && !error && books.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <BookCard key={book._id} {...book} /> 
          ))}
        </div>
      ) : (
        !loading && (
          <p className="text-center text-gray-500">No books available.</p>
        )
      )}
    </div>
  );
};

export default BookList;
