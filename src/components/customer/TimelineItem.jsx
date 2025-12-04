export default function TimelineItem({ year, title, description }) {
  return (
    <div className="relative pl-10 md:pl-12 mb-10">
      
      {/* Vertical Line */}
      <div className="absolute left-4 top-0 w-[2px] h-full bg-gray-300"></div>

      {/* Dot */}
      <div className="absolute left-2 top-2 w-5 h-5 bg-blue-700 rounded-full border-4 border-white shadow"></div>

      {/* Content */}
      <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-md">
        <p className="font-bold text-blue-800 text-lg">{year}</p>
        <p className="font-semibold text-blue-900 text-xl">{title}</p>
        <p className="text-gray-600 mt-2 leading-relaxed">{description}</p>
      </div>

    </div>
  );
}
