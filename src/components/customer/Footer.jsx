import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const scrollToSection = (path, id) => {
    navigate(path);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }, 100); // small delay to ensure page renders
  };

  return (
    <footer className="bg-gray-900 text-white py-12 mt-10 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-4">

        {/* Solutions */}
        <div>
          <h5 className="text-white font-semibold mb-4 text-base md:text-lg">Solutions</h5>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><button onClick={() => scrollToSection("/about", "at-a-glance")} className="hover:text-aramcoGreen transition">Cellular Networks</button></li>
            <li><button onClick={() => scrollToSection("/about", "at-a-glance")} className="hover:text-aramcoGreen transition">Fixed Wireless</button></li>
            <li><button onClick={() => scrollToSection("/about", "technology")} className="hover:text-aramcoGreen transition">WiFi & DOCSIS</button></li>
            <li><button onClick={() => scrollToSection("/about", "technology")} className="hover:text-aramcoGreen transition">mmWave Systems</button></li>
          </ul>
        </div>

        {/* Technology */}
        <div>
          <h5 className="text-white font-semibold mb-4 text-base md:text-lg">Technology</h5>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><button onClick={() => scrollToSection("/about", "how-it-works")} className="hover:text-aramcoGreen transition">How It Works</button></li>
            <li><button onClick={() => scrollToSection("/about", "technology")} className="hover:text-aramcoGreen transition">PHY Engine</button></li>
            <li><button onClick={() => scrollToSection("/about", "technology")} className="hover:text-aramcoGreen transition">Constellation Mapping</button></li>
            <li><button onClick={() => scrollToSection("/about", "technology")} className="hover:text-aramcoGreen transition">Capacity Embedding</button></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h5 className="text-white font-semibold mb-4 text-base md:text-lg">Company</h5>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><button onClick={() => scrollToSection("/about", "about")} className="hover:text-aramcoGreen transition">About Us</button></li>
            <li><button onClick={() => scrollToSection("/about", "leadership")} className="hover:text-aramcoGreen transition">Leadership</button></li>
            <li><button onClick={() => scrollToSection("/about", "research-partners")} className="hover:text-aramcoGreen transition">Research Partners</button></li>
            <li><button onClick={() => scrollToSection("/about", "careers")} className="hover:text-aramcoGreen transition">Careers</button></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h5 className="text-white font-semibold mb-4 text-base md:text-lg">Support</h5>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><button onClick={() => scrollToSection("/home", "contact")} className="hover:text-aramcoGreen transition">Contact Us</button></li>
            <li><button onClick={() => scrollToSection("/about", "documentation")} className="hover:text-aramcoGreen transition">Documentation</button></li>
            <li><button onClick={() => scrollToSection("/about", "timeline")} className="hover:text-aramcoGreen transition">Test Reports</button></li>
            <li><button onClick={() => scrollToSection("/newsletter", "faq")} className="hover:text-aramcoGreen transition">FAQ</button></li>
          </ul>
        </div>

      </div>

      {/* LEGAL */}
      <div className="mt-12 border-t border-white/10 pt-6 max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center text-sm">
        <div className="text-gray-400">
          © {new Date().getFullYear()} AhsanLabs — All Rights Reserved
        </div>
        <div className="flex gap-4 mt-4 md:mt-0 text-gray-300">
          <a href="https://twitter.com/AhsanLabs" target="_blank" rel="noopener noreferrer" className="hover:text-aramcoGreen transition">Twitter</a>
          <a href="https://www.linkedin.com/company/ahsanlabs" target="_blank" rel="noopener noreferrer" className="hover:text-aramcoGreen transition">LinkedIn</a>
          <a href="https://www.youtube.com/@AhsanLabs" target="_blank" rel="noopener noreferrer" className="hover:text-aramcoGreen transition">YouTube</a>
        </div>
      </div>
    </footer>
  );
}
