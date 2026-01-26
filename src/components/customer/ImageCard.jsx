export default function ImageCard({title, src }) {
  return (
    <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden rounded-2xl shadow-lg border border-gray-200 group">
      <img
        src={src}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
\

      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <h3 className="text-blue-900 font-bold text-xl md:text-2xl text-center px-4">
          {title}
        </h3>
      </div>
    </div>
  );
}
