import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to hash on navigation
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const scrollToSection = (path, id) => {
    navigate(`${path}#${id}`);
  };

  return (
    <footer className="bg-white text-black py-12 mt-10 w-full shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row: Logo left, Links right */}
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start text-center md:text-left gap-12">
          {/* Logo */}
          <div className="flex-shrink-0 mb-6 md:mb-0">
            <img src="/logo.png" alt="ANSpect Logo" className="h-16 sm:h-20 w-auto" />
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-end gap-6 sm:gap-12 text-sm md:text-base">
            {/* Column 1 */}
            <div className="flex flex-col space-y-2">
              <button onClick={() => navigate("/")} className="hover:text-blue-800 transition">
                Home
              </button>
              <button onClick={() => scrollToSection("/", "industries")} className="hover:text-blue-800 transition">
                Industries
              </button>
              
            </div>

            {/* Column 2 */}
            <div className="flex flex-col space-y-2">
              <button onClick={() => navigate("/about")} className="hover:text-blue-800 transition">
                Company
              </button>
              <button onClick={() => scrollToSection("/about", "team")} className="hover:text-blue-800 transition">
                Team
              </button>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col space-y-2">
              <button onClick={() => scrollToSection("/about", "technology")} className="hover:text-blue-800 transition">
                Technology
              </button>
              <button onClick={() => scrollToSection("/about", "insights")} className="hover:text-blue-800 transition">
                Insights
              </button>
            </div>

          </div>
        </div>

        {/* Bottom row: Socials + Legal */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} ANSpect — All Rights Reserved
          </div>

          <div className="flex justify-center gap-4 sm:gap-6 mt-4 md:mt-0 text-black">
            <a href="https://twitter.com/ANSpect" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition">Twitter</a>
            <a href="https://www.linkedin.com/company/ANSpect" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition">LinkedIn</a>
            <a href="https://www.youtube.com/@ANSpect" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
