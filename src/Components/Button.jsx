
const Button = ({ children, className, onClick }) => (
    <button
      className={`px-4 py-2 bg-[#bca684] border border-[#d3bb97] rounded hover:bg-[#dac3a2] transition ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
  export default Button