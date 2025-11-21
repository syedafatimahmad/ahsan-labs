export default function VideoCard({ title, src }) {
  return (
    <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden rounded-xl group shadow-lg">
      <video
        src={src}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        muted
        loop
        autoPlay
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold text-center px-4">
          {title}
        </h3>
      </div>
    </div>
  );
}
