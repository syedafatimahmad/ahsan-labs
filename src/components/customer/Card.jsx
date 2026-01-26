import { motion, AnimatePresence } from "framer-motion";

export default function Card({ data, isOpen, onClick }) {
  return (
    <motion.div
      layout
      onClick={onClick}
      className={`relative rounded-3xl overflow-hidden shadow-xl cursor-pointer
      ${isOpen ? "h-[450px]" : "h-[300px]"}
      transition-all duration-500 flex items-end`}
    >
      {/* Background Image */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-all duration-500
        ${isOpen ? "blur-sm scale-105" : ""}`}
        style={{ backgroundImage: `url(${data.img})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

      {/* Text */}
      <div className="relative z-10 p-6 text-white w-full">
        <h3 className="text-2xl font-bold mb-2">{data.title}</h3>

        {!isOpen && (
          <p className="text-gray-300 text-sm">{data.summary}</p>
        )}

        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-4 space-y-2 text-gray-200 text-sm list-disc list-inside"
            >
              {data.details.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
