// DocumentCard.jsx
export default function DocumentCard({ title, description }) {
  return (
    <div className="bg-gray-900 bg-opacity-60 rounded-2xl shadow-md p-6 hover:shadow-xl hover:scale-105 transition-transform duration-300">
      <h4 className="font-semibold text-aramcoGreen text-lg sm:text-xl mb-2">{title}</h4>
      <p className="text-gray-300 text-sm sm:text-base">{description}</p>
    </div>
  );
}
