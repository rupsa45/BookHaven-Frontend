import { Search } from "lucide-react";
import {useState } from "react";
import MobileNav from "./MobileNav";
import { Link, useNavigate } from "react-router-dom"; 
import { LogOut, BookPlus } from "lucide-react";
import { searchBooks } from "../api/search.api"; 

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
  const [searchResults, setSearchResults] = useState([]); // State for search results
  const token = localStorage.getItem("token"); // Get the token from localStorage
  const navigate = useNavigate(); // Initialize the navigate function


  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    window.location.reload(); // Refresh the page
  };

  // Handle dropdown toggle
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle search submission
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      try {
        const results = await searchBooks(searchQuery); // Call the search API
        setSearchResults(results); // Update state with search results
        // Navigate to the BookList page and pass the search results
        navigate("/books", { state: { searchResults: results } });
      } catch (error) {
        console.error("Error during search:", error);
      }
    }
  };

  return (
    <div className="bg-[#FEF3E2] text-slate-900 shadow-lg desktop-nav">
      <div className="hidden container mx-auto md:flex justify-between items-center py-4 px-6">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          <span className="text-yellow-300">Book</span>Haven
        </Link>

        <nav className="hidden md:flex space-x-8 text-slate-800">
          <Link to="/" className="hover:text-yellow-300 transition">
            Home
          </Link>
          <Link to="/categories" className="hover:text-yellow-300 transition">
            Categories
          </Link>
          <Link to="/books" className="hover:text-yellow-300 transition">
            Books
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          {/* Search Input */}
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="Search books..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="bg-white text-gray-700 rounded-lg pl-10 pr-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
          </form>

          {/* Conditional rendering based on token */}
          {token ? (
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="bg-yellow-300 text-purple-800 px-4 py-2 rounded-lg hover:bg-yellow-400 transition"
              >
                Profile {/* Display username */}
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 bg-[#e8d7be] shadow-lg rounded-md z-50">
                  <Link
                    to="/addBooks"
                    className="flex gap-1 px-4 py-2 text-gray-700 hover:bg-yellow-300"
                  >
                    <BookPlus />
                    AddBook
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 flex gap-1 text-gray-700 hover:bg-yellow-300"
                  >
                    <LogOut />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="bg-yellow-300 text-purple-800 px-4 py-2 rounded-lg hover:bg-yellow-400 transition"
            >
              Get Started
            </Link>
          )}
        </div>
      </div>

      <div className="md:hidden focus:outline-none">
        <MobileNav />
      </div>
    </div>
  );
};

export default Navbar;
