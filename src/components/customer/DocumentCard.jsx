export default function DocumentCard({ title, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition">
      <h4 className="font-semibold text-blue-900 text-2xl mb-2">{title}</h4>
      <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
    </div>
  );
}
