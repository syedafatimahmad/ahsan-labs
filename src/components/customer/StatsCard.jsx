export default function StatsCard({ title, value, icon }) {
  return (
    <div className="bg-white/90 dark:bg-gray-900 rounded-lg shadow-md p-4 sm:p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
      {icon && <div className="mb-2">{icon}</div>}
      <p className="text-3xl sm:text-4xl font-extrabold text-aramcoGreen">{value}</p>
      <p className="mt-1 sm:mt-2 text-sm sm:text-lg text-gray-800 dark:text-gray-200 text-center">{title}</p>
    </div>
  );
}
