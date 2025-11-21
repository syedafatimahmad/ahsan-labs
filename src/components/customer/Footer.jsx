export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-10 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
        {["Solutions", "Insights", "Company", "Support"].map((title, i) => (
          <div key={i}>
            <h5 className="text-white font-semibold mb-3">{title}</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Item 1</a></li>
              <li><a href="#" className="hover:text-white">Item 2</a></li>
              <li><a href="#" className="hover:text-white">Item 3</a></li>
            </ul>
          </div>
        ))}
      </div>

      {/* LEGAL */}
      <div className="mt-10 border-t border-white/10 pt-6 max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center text-sm">
        <div className="text-gray-400">
          © {new Date().getFullYear()} Your Company — Privacy · Terms
        </div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
          <a href="#">YouTube</a>
        </div>
      </div>
    </footer>
  );
}
