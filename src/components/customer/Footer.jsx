import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg"; // adjust path if needed

export default function Footer() {
  const navigate = useNavigate();

  const scrollToSection = (path, id) => {
    navigate(path);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <footer className="bg-gray-900 text-white py-12 mt-10 w-full">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top row: Logo left, Links right */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="AhsanLabs Logo" className="h-12" />
          </div>

          {/* Links */}
          <div className="flex flex-1 justify-between">
            {/* Technology */}
            <div className="flex-1">
              <h5 className="text-white font-semibold mb-4 text-base md:text-lg">Technology</h5>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <button
                    onClick={() => scrollToSection("/about", "how-it-works")}
                    className="hover:text-aramcoGreen transition"
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("/about", "phy engine")}
                    className="hover:text-aramcoGreen transition"
                  >
                    PHY Engine
                  </button>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="flex-1">
              <h5 className="text-white font-semibold mb-4 text-base md:text-lg">Company</h5>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <button onClick={() => navigate("/about")} className="hover:text-aramcoGreen transition">
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("/about", "careers")}
                    className="hover:text-aramcoGreen transition"
                  >
                    Careers
                  </button>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="flex-1">
              <h5 className="text-white font-semibold mb-4 text-base md:text-lg">Support</h5>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <button
                    onClick={() => scrollToSection("/home", "contact")}
                    className="hover:text-aramcoGreen transition"
                  >
                    Contact Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigate("/newsletter#faq")}
                    className="hover:text-aramcoGreen transition"
                  >
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
            © {new Date().getFullYear()} AhsanLabs — All Rights Reserved
          </div>

          <div className="flex justify-center gap-6 mt-4 md:mt-0 text-gray-300">
            <a
              href="https://twitter.com/AhsanLabs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-aramcoGreen transition"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/company/ahsanlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-aramcoGreen transition"
            >
              LinkedIn
            </a>
            <a
              href="https://www.youtube.com/@AhsanLabs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-aramcoGreen transition"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
