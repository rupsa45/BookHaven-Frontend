import { Star, Download } from "lucide-react";

function BookCard({
  _id,
  title,
  author,
  coverImage,
  pdfUrl,
  rating,
  category,
  summary,
}) {
  const handleDownload = () => {
    const downloadUrl = `${
      import.meta.env.VITE_API_BASE_URL
    }/books/download/${_id}`;
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.click();
  };

  return (
    <div className="overflow-hidden border rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300">
      {/* Book Cover */}
      <div className="relative w-full h-64 bg-gray-200">
        <img
          src={`${import.meta.env.VITE_API_BASE_URL}/${coverImage}`}
          alt={`Cover of ${title} by ${author}`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2">
          <span className="bg-white text-primary text-xs font-medium py-1 px-2 rounded shadow">
            {category}
          </span>
        </div>
      </div>

      {/* Book Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold line-clamp-1">{title}</h3>
        <p className="text-sm text-gray-500 mb-2">{author}</p>

        {/* Rating */}
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
              }`}
              fill="currentColor"
            />
          ))}
          <span className="ml-2 text-sm font-medium">{rating.toFixed(1)}</span>
        </div>

        {/* Summary */}
        <p className="text-sm text-gray-600 line-clamp-3 mb-4">{summary}</p>
      </div>

      {/* Footer Buttons */}
      <button
        className="p-4 pt-0 flex justify-between"
        onClick={handleDownload} // Trigger the download on button click
      >
        <div className="w-full bg-blue-600 text-white rounded-lg px-4 py-2 flex items-center justify-center text-sm hover:bg-blue-700 transition">
          <Download className="w-4 h-4 mr-2" />
          Download PDF
        </div>
      </button>
    </div>
  );
}

export default BookCard;
