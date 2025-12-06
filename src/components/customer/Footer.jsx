import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scrolling to hash when navigating
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const scrollToSection = (path, id) => {
    // Navigate with hash, the useEffect will handle scrolling
    navigate(`${path}#${id}`);
  };

  return (
    <footer className="bg-white text-black py-12 mt-10 w-full shadow-[0_-4px_10px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top row: Logo left, Links right */}
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start text-center md:text-left gap-12">
          {/* Logo */}
          <div className="shrink-0">
            <img src={logo} alt="ANSpect Logo" className="h-20 " />
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-12 md:gap-20">
            {/* Technology */}
            <div>
              <h5 className="text-black font-semibold mb-4 text-base md:text-lg">Technology</h5>
              <ul className="space-y-2 text-sm text-black">
                <li>
                  <button onClick={() => scrollToSection("/about", "how-it-works")} className="hover:text-aramcoGreen transition">
                    How It Works
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("/about", "phyengine")} className="hover:text-aramcoGreen transition">
                    PHY Engine
                  </button>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h5 className="text-black font-semibold mb-4 text-base md:text-lg">Company</h5>
              <ul className="space-y-2 text-sm text-black">
                <li>
                  <button onClick={() => navigate("/about")} className="hover:text-aramcoGreen transition">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection("/about", "careers")} className="hover:text-aramcoGreen transition">
                    Careers
                  </button>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h5 className="text-black font-semibold mb-4 text-base md:text-lg">Support</h5>
              <ul className="space-y-2 text-sm text-black">
                <li>
                  <button onClick={() => scrollToSection("/", "contact")} className="hover:text-aramcoGreen transition">
                    Contact Us
                  </button>
                </li>
                <li>
                  <button onClick={() => navigate("/newsletter#faq")} className="hover:text-aramcoGreen transition">
                    FAQ
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom row: Socials + Legal */}
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-400 text-sm text-center md:text-left">
            © {new Date().getFullYear()} ANSpect — All Rights Reserved
          </div>

          <div className="flex justify-center gap-6 mt-4 md:mt-0 text-black">
            <a href="https://twitter.com/ANSpect" target="_blank" rel="noopener noreferrer" className="hover:text-aramcoGreen transition">Twitter</a>
            <a href="https://www.linkedin.com/company/ANSpect" target="_blank" rel="noopener noreferrer" className="hover:text-aramcoGreen transition">LinkedIn</a>
            <a href="https://www.youtube.com/@ANSpect" target="_blank" rel="noopener noreferrer" className="hover:text-aramcoGreen transition">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
