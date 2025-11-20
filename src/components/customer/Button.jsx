export default function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition ${className}`}
    >
      {children}
    </button>
  );
}
