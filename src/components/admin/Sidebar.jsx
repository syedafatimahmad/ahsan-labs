import { Link, useLocation } from "react-router-dom";
import { FiHome, FiBox, FiMail, FiFileText } from "react-icons/fi";

export default function Sidebar() {
  const location = useLocation();

  const links = [
    { name: "Dashboard", icon: <FiHome />, path: "/admin/dashboard" },
    { name: "Products", icon: <FiBox />, path: "/admin/products" },
    { name: "Newsletter", icon: <FiMail />, path: "/admin/newsletter" },
    { name: "Content", icon: <FiFileText />, path: "/admin/content" },
  ];

  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-6 fixed flex flex-col">
      {/* Logo */}
      <div className="flex items-center mb-10">
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
          AL
        </div>
        <h2 className="ml-3 text-2xl font-bold">Ahsan Labs</h2>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-3 flex-1 overflow-y-auto">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.name}
              to={link.path}
              className={`flex items-center gap-3 px-3 py-2 rounded-md transition-colors duration-200 ${
                isActive ? "bg-blue-600 text-white" : "hover:text-blue-400"
              }`}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Optional: Footer */}
      <div className="mt-auto text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Ahsan Labs
      </div>
    </div>
  );
}
