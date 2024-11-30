import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import Homepage from './pages/Home/Homepage'
import CategoriesPage from "./pages/Categories/CategoriesPage";
import BookListPage from "./pages/Books/BookListPage";
import AddBooksPage from "./pages/AddBooks/AddBooksPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    
    <div
      className="bg-gradient-to-br from-[#f3e7db] to-[#e7d8c9]"
    >
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/categories" element={<CategoriesPage/>}/>
        <Route path="/books" element={<BookListPage/>}/>
        <Route path="/addBooks" element={<AddBooksPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
