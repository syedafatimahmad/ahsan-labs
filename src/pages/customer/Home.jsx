import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../../components/customer/Navbar";
import Footer from "../../components/customer/Footer";
import Button from "../../components/customer/Button";

export default function Home() {
  const location = useLocation();

  // Scroll to #contact if hash is present
  useEffect(() => {
    if (location.hash === "#contact") {
      const contactSection = document.querySelector("#contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const solutions = [
    {
      title: "Open RAN & Wi‑Fi 8",
      desc: "Software-defined radio access networks and next-gen Wi‑Fi to maximize spectral efficiency.",
      img: "https://www.shutterstock.com/shutterstock/videos/3447871571/thumb/12.jpg?ip=x480",
    },
    {
      title: "Wired Network Optimization",
      desc: "Enhanced cable and edge networking through software-defined optimization on existing infrastructure.",
      img: "https://www.cynergytech.com/wp-content/uploads/2022/12/network-cabling.jpg",
    },
    {
      title: "Satellite Link Acceleration",
      desc: "Maximize data throughput over satellite links with our adaptive coding and transport optimizations.",
      img: "https://antesky.com/wp-content/uploads/2024/04/satellite-internet.jpg",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      {/* Hero Section */}
      <header className="relative text-white py-28 md:py-40 text-center overflow-hidden bg-gradient-to-b from-black/80 via-black/40 to-black/80">
        {/* Optional subtle animated glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15),transparent_70%)]"></div>

        <div className="relative z-10 px-6">
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-xl tracking-tight"
          >
            Welcome to AhsanLabs
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-2xl md:text-3xl font-bold mb-6 drop-shadow-md tracking-wide text-[#41b48ea9]"
          >
            Spectrally Efficient Communications
          </motion.h2>

          <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed text-gray-200 drop-shadow-sm"
        >
          <span className="font-semibold text-white">AhsanLabs</span> develops advanced 
          <span className="font-semibold text-white"> software</span> and 
          <span className="font-semibold text-white"> firmware-based technologies</span> designed to significantly enhance the capacity of modern digital networks, including Cellular, WiFi, IoT, Cable, and Satellite systems. 
          Our innovations elevate the <span className="font-semibold text-white">spectral efficiency</span> of these networks, enabling operators to deliver faster, more reliable connectivity while reducing overall 
          <span className="font-semibold text-white"> cost-per-bit</span>.
        </motion.p>


          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            <Link to="/services">
              <button className="px-10 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white rounded-xl text-lg font-semibold shadow-2xl backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(5,150,105,0.5)]">
                Our Services
              </button>
            </Link>
          </motion.div>
        </div>
      </header>


      {/* Solutions Section */}
      <section className="bg-gradient-to-tr from-black/20 via-white/5 to-black/20 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
        >
          Our Solutions
        </motion.h2>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {solutions.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-3xl shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="w-full h-48 overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col items-center text-center">
                <h3 className="text-xl font-bold text-white mb-2">{s.title}</h3>
                <p className="text-gray-300">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-20">
        <motion.div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <motion.div className="flex-[0.8] p-10 bg-black/40 backdrop-blur-md rounded-3xl shadow-2xl flex flex-col justify-center hover:shadow-3xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
            <p className="text-gray-300 mb-4">
              Email:{" "}
              <a href="mailto:sales@ahsanalabs.com" className="text-aramcoGreen underline">
                sales@ahsanalabs.com
              </a>
            </p>
            <p className="text-gray-300 mb-4">
              Phone:{" "}
              <a href="tel:+1234567890" className="text-aramcoGreen underline">
                +1 (234) 567-890
              </a>
            </p>
            <p className="text-gray-300 mb-4">Address: 123 AhsanLabs Street, Tech City, Country</p>
            <p className="text-gray-400">
              Our team is ready to answer your questions and guide you through trials, POCs, or custom integrations.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="flex-[1.2] p-10 bg-black/40 backdrop-blur-md rounded-3xl shadow-2xl flex flex-col gap-5 hover:shadow-3xl transition-shadow duration-300"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Form submitted!");
            }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Contact Us</h2>
            <input type="text" placeholder="Your Name" className="p-4 rounded-xl bg-gray-700 text-white border border-gray-600 focus:border-aramcoGreen focus:ring-1 focus:ring-aramcoGreen outline-none transition-all"/>
            <input type="email" placeholder="Your Email" className="p-4 rounded-xl bg-gray-700 text-white border border-gray-600 focus:border-aramcoGreen focus:ring-1 focus:ring-aramcoGreen outline-none transition-all"/>
            <input type="text" placeholder="Company (optional)" className="p-4 rounded-xl bg-gray-700 text-white border border-gray-600 focus:border-aramcoGreen focus:ring-1 focus:ring-aramcoGreen outline-none transition-all"/>
            <textarea placeholder="Your Message" rows={5} className="p-4 rounded-xl bg-gray-700 text-white border border-gray-600 focus:border-aramcoGreen focus:ring-1 focus:ring-aramcoGreen outline-none transition-all"/>
            <Button type="submit" className="mt-2 px-6 py-3 bg-aramcoGreen font-semibold rounded-xl hover:scale-105 transition-transform duration-300 text-white">
              Send Message
            </Button>
          </motion.form>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
