import { categories } from "../../Utils/Categories";
import Card from "../../Components/Cards/Card";
import CardContent from "../../Components/Cards/CardContent";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";

export default function BookCategories() {
  return (
    <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          Explore Our Book Categories
        </h2>

        {/* Categories Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {categories.map((category) => (
            <Card
              key={category.name}
              className=" bg-[#e3d1b8] hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent>
                <div
                  className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mb-4 mx-auto`}
                >
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  Discover amazing {category.name.toLowerCase()} books that will
                  captivate your imagination.
                </p>
                <Button className="w-full">
                  <Link to={`/category/${category.name.toLowerCase()}`}>
                    Explore {category.name}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
      </div>
    </div>
  );
}
