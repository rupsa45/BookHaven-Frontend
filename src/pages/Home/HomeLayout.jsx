import { BookOpen, Star, ArrowRight } from "lucide-react";
import About from "./About";
import {Link} from 'react-router-dom'
const HomeLayout = () => {
  const books = [
    {
      title: "The Midnight Library",
      author: "Matt Haig",
      image:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1602190253i/52578297.jpg",
      rating: 4.6,
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      image:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg",
      rating: 4.8,
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      image:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg",
      rating: 4.7,
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#f3e7db] to-[#e7d8c9] relative overflow-hidden font-sans">
      {/* Subtle background shapes */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute w-96 h-96 bg-purple-300 rounded-full -top-48 -left-48 blur-3xl"></div>
        <div className="absolute w-96 h-96 bg-blue-200 rounded-full -bottom-48 -right-48 blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2 mb-12 md:mb-0">
          <div className="flex items-center justify-center md:justify-start mb-8">
            <BookOpen className="w-12 h-12 mr-4 text-yellow-400" />
            <h1 className="text-5xl md:text-6xl text-purple-800 font-extrabold tracking-tight">
              Reading Is For All Ages
            </h1>
          </div>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto md:mx-0 text-black leading-relaxed mb-8 font-serif">
            Discover new worlds, expand your knowledge, and ignite your
            imagination with our curated collection of books.
          </p>
          <button 
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center">
            <Link to='/books'>Explore Books</Link> <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>

        {/* Featured Books */}
        <div className="w-full md:w-1/2 relative">
          <div className="grid grid-cols-2 gap-4">
            {books.map((book, index) => (
              <div
                key={index}
                className={`bg-[#FEF3E2] p-4 rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 ${
                  index === 2 ? "col-span-2" : ""
                }`}
              >
                <div className="relative h-64 mb-4">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {book.title}
                </h3>
                <p className="text-sm text-gray-600 mb-2">{book.author}</p>
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-1" />
                  <span className="text-sm font-medium text-gray-700">
                    {book.rating}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <About />
    </div>
  );
};

export default HomeLayout;
