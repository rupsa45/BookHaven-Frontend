import {  Star,  Globe, User } from "lucide-react";

const About = () => {
  return (
    <div>
      <div className="relative z-10 bg-gradient-to-br from-[#f3e7db] to-[#e7d8c9] py-12">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-purple-800 mb-8">
            About Our Bookstore
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center">
              <Globe className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                A Global Collection
              </h3>
              <p className="text-gray-600">
                Discover books from around the world, carefully curated for all
                age groups and interests.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <User className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Community Focused
              </h3>
              <p className="text-gray-600">
                We foster a love for reading by connecting readers with the
                stories that inspire them.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Star className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Top-Rated Service
              </h3>
              <p className="text-gray-600">
                With thousands of 5-star reviews, we are dedicated to providing
                the best book-buying experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
