export default function DocumentCard({ title, file }) {
  return (
    <a
      href={file}
      target="_blank"
      className="block bg-gray-900 bg-opacity-50 rounded-2xl shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300"
    >
      <h4 className="font-semibold text-base sm:text-lg text-aramcoGreen mb-1">{title}</h4>
      <p className="text-gray-300 text-sm sm:text-base">Download PDF</p>
    </a>
  );
}
