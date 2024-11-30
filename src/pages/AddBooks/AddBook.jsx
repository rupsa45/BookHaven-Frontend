import { useState } from "react";
import { Book, Star, Tags, FileText } from "lucide-react";
import { uploadBook } from "../../api/bookApi";
import { toast } from "react-toastify";

const AddBook = () => {
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    rating: 0,
    category: "",
    summary: "",
  });

  const [files, setFiles] = useState({
    coverImage: null,
    pdfUrl: null,
  });

  // Handle text input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle file input changes
  const handleFileChange = (e) => {
    const { name, files: selectedFiles } = e.target;
    setFiles((prev) => ({ ...prev, [name]: selectedFiles[0] }));
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!files.coverImage || !files.pdfUrl) {
      toast.error("Both cover image and PDF file are required!");
      return;
    }

    const formData = new FormData();
    Object.entries(bookData).forEach(([key, value]) => {
      formData.append(key, value);
    });
    formData.append("coverImage", files.coverImage);
    formData.append("pdfUrl", files.pdfUrl);

    try {
      const response = await uploadBook(formData, toast);
      if (response) {
        setBookData({ title: "", author: "", rating: 0, category: "", summary: "" });
        setFiles({ coverImage: null, pdfUrl: null });
      }
    } catch (error) {
      console.error("Error during book upload:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Add Book Details</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div className="flex items-center">
          <Book className="mr-2 text-blue-500" />
          <input
            type="text"
            name="title"
            value={bookData.title}
            onChange={handleInputChange}
            placeholder="Book Title"
            className="w-full p-2 border rounded bg-[#dfd4c4]"
            required
          />
        </div>

        {/* Author */}
        <div className="flex items-center">
          <FileText className="mr-2 text-green-500" />
          <input
            type="text"
            name="author"
            value={bookData.author}
            onChange={handleInputChange}
            placeholder="Author Name"
            className="w-full p-2 border rounded bg-[#dfd4c4]"
            required
          />
        </div>

        {/* Cover Image Upload */}
        <div>
          <label className="block mb-2">Cover Image</label>
          <input
            type="file"
            name="coverImage"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full p-2 border rounded bg-[#dfd4c4]"
            required
          />
        </div>

        {/* Rating */}
        <div className="flex items-center">
          <Star className="mr-2 text-yellow-500" />
          <select
            name="rating"
            value={bookData.rating}
            onChange={handleInputChange}
            className="w-full p-2 border rounded bg-[#dfd4c4]"
          >
            {[0, 1, 2, 3, 4, 5].map((num) => (
              <option key={num} value={num}>
                {num} Stars
              </option>
            ))}
          </select>
        </div>

        {/* Category */}
        <div className="flex items-center">
          <Tags className="mr-2 text-purple-500" />
          <select
            name="category"
            value={bookData.category}
            onChange={handleInputChange}
            className="w-full p-2 border rounded bg-[#dfd4c4]"
            required
          >
            <option value="">Select Category</option>
            <option value="Fiction">Fiction</option>
            <option value="Non-Fiction">Non-Fiction</option>
            <option value="Science Fiction">Science Fiction</option>
            <option value="Romance">Romance</option>
            <option value="Cookbooks">Cookbooks</option>
            <option value="Self-Help">Self-Help</option>
            <option value="Psychological-Thriller">Psychological-Thriller</option>
            <option value="Biography">Biography</option>
          </select>
        </div>

        {/* PDF Upload */}
        <div>
          <label className="block mb-2">Book PDF</label>
          <input
            type="file"
            name="pdfUrl"
            accept=".pdf"
            onChange={handleFileChange}
            className="w-full p-2 border rounded bg-[#dfd4c4]"
            required
          />
        </div>

        {/* Summary */}
        <div>
          <textarea
            name="summary"
            value={bookData.summary}
            onChange={handleInputChange}
            placeholder="Book Summary"
            className="w-full p-2 border rounded h-24 bg-[#dfd4c4]"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddBook;
