export default function DocumentCard({ title, file }) {
  return (
    <a
      href={file}
      target="_blank"
      className="block bg-white/90 dark:bg-gray-900 rounded-lg shadow-md p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300"
    >
      <h4 className="font-semibold text-base sm:text-lg text-gray-800 dark:text-gray-200 mb-1">{title}</h4>
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Download PDF</p>
    </a>
  );
}
