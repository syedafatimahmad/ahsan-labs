export default function TimelineItem({ year, title, description }) {
  return (
    <div className="relative pl-12 mb-8 sm:mb-12">
      {/* Vertical line */}
      <div className="absolute left-5 top-0 w-1 h-full bg-gray-700"></div>

      {/* Dot */}
      <div className="absolute left-0 top-2 w-6 h-6 bg-aramcoGreen rounded-full border-2 border-white shadow-lg"></div>

      {/* Content card */}
      <div className="bg-gray-900 bg-opacity-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
        <p className="font-bold text-aramcoGreen text-lg sm:text-xl mb-1">{year}</p>
        <p className="font-semibold text-white text-lg sm:text-xl">{title}</p>
        <p className="text-gray-300 text-sm sm:text-base mt-2 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
