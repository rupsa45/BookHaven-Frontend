import { useState } from "react";
import {  Lock, Eye, EyeOff, User } from "lucide-react";
import { Link,useNavigate } from "react-router-dom";
import { login } from "../api/user.api";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

  
    try {
      const response = await login(
        formData.username,
        formData.password
      );
  
      if (response.success) {
        localStorage.setItem("token", response.token);
        setFormData({
          username: "",
          password: "",
        });
        navigate("/");
      } else {
        alert(response.message || "Signup failed");
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert(error.response?.data?.message || "An error occurred during signup");
    }
  };
  
  return (
    <div className="h-screen flex  gap-2 items-center justify-center">
     {/* <div className="text-slate-900">
     <h1 className="text-4xl font-bold  mb-4">Welcome to Our Bookstore</h1>
     <p className="text-xl ">Discover your next favorite book with us</p>
     </div> */}
      <div className="glassmorphism backdrop-blur-md bg-opacity-80 p-8 rounded-2xl shadow-2xl max-w-md w-full">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">Login to BookHaven        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="username"
              name="username"
              type="username"
              required
              placeholder="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-3 pl-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="h-5 w-5 text-gray-400" />
            </div>
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              required
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 pl-10 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5 text-gray-400" />
              ) : (
                <Eye className="h-5 w-5 text-gray-400" />
              )}
            </button>
          </div>

          {/* <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

          </div> */}

          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            <Link to="/">
            Login
            </Link>
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            {`Don't`} have an account?{" "}
            <Link to="/Signup" className="text-blue-600 hover:underline">
                Signup
              </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;