export default function StatsCard({ title, value, icon }) {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-200 text-center hover:shadow-lg transition">
      {icon && <div className="mb-3 text-blue-700">{icon}</div>}
      
      <p className="text-4xl font-extrabold text-blue-900">{value}</p>
      
      <p className="mt-2 text-gray-600 text-sm">{title}</p>
    </div>
  );
}
