export default function Button({ children, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-3 bg-gradient-to-r from-emerald-600 to-emerald-800 transition ${className}`}
    >
      {children}
    </button>
  );
}
