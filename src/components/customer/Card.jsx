export default function Card({ title, description, icon }) {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 hover:shadow-lg transition">
      {icon && <div className="mb-4">{icon}</div>}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}
