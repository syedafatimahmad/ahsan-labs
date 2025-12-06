export default function Button({ children, onClick, className = "", type = "button", ...props }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-8 py-3 bg-gradient-to-r from-blue-600 to-gray-900 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}