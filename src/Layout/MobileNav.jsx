import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { searchBooks } from "../api/search.api";
const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // state for dropdown
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token"); // Get the token from localStorage

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown visibility
  };

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    navigate("/login"); // Redirect to the login page
  };
  const handleSearchSubmit = async (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      try {
        const results = await searchBooks(searchQuery);
        setSearchResults(results);
        navigate("/books", { state: { searchResults: results } });
      } catch (error) {
        console.error("Error during search:", error);
      }
    }
  };
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    <div className="bg-[#FEF3E2] text-slate-900 shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 mobile-nav">
        <a href="/" className="text-2xl font-bold tracking-wide">
          <span className="text-yellow-300">Book</span>Haven
        </a>

        <div className="flex items-center space-x-4">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? (
              <X className="h-8 w-8" />
            ) : (
              <Menu className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute z-20 w-full bg-[#FEF3E2] shadow-lg">
          <nav className="flex flex-col space-y-4 p-6">
            <Link
              to="/"
              className="hover:text-yellow-300 transition text-xl"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/categories"
              className="hover:text-yellow-300 transition text-xl"
              onClick={toggleMenu}
            >
              Categories
            </Link>
            <Link
              to="/books"
              className="hover:text-yellow-300 transition text-xl"
              onClick={toggleMenu}
            >
              Books
            </Link>

            <div className="relative mt-4">
              <form onSubmit={handleSearchSubmit} className="relative">
                <input
                  type="text"
                  placeholder="Search books..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="bg-white text-gray-700 rounded-lg pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-300"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
              </form>
            </div>

            {/* Conditional rendering based on token */}
            {token ? (
              <div>
                <button
                  onClick={toggleDropdown}
                  className="bg-yellow-300 text-purple-800 px-4 py-3 rounded-lg hover:bg-yellow-400 transition text-center w-full text-xl"
                >
                  Profile
                </button>
                {isDropdownOpen && (
                  <div className="flex flex-col space-y-2 mt-2">
                    <Link
                      to="/addBooks"
                      className="bg-yellow-300 text-purple-800 px-4 py-3 rounded-lg hover:bg-yellow-400 transition text-center w-full text-xl"
                      onClick={toggleMenu}
                    >
                      Add Book
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="bg-yellow-300 text-purple-800 px-4 py-3 rounded-lg hover:bg-yellow-400 transition text-center w-full text-xl"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-yellow-300 text-purple-800 px-4 py-3 rounded-lg hover:bg-yellow-400 transition text-center text-xl"
                onClick={toggleMenu}
              >
                Get Started
              </Link>
            )}
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
