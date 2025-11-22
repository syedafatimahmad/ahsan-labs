export default function StatsCard({ title, value, icon }) {
  return (
    <div className="bg-gray-900 bg-opacity-50 rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl hover:scale-105 transition-all duration-300">
      {icon && <div className="mb-2">{icon}</div>}
      <p className="text-3xl sm:text-4xl font-extrabold text-aramcoGreen">{value}</p>
      <p className="mt-2 text-sm sm:text-lg text-gray-300 text-center">{title}</p>
    </div>
  );
}
