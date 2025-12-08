import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../../components/customer/Button";
import Footer from "../../components/customer/Footer";
import techVideo from "../../assets/tech.mp4";
import ProductBanner from "../../components/customer/ProductBanner";

import ansVid from "../../assets/videos/femaleanspect.mp4";

import Contact from "../../components/customer/Contact";

export default function Home() {
  const location = useLocation();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Scroll to anchor if hash is present
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const heroSlides = [
    {
      title: "Welcome to ANSpect",
      subtitle: "Supercharge Network Capacity — Pure Software. Zero Hardware.",
      desc: "ANSpect patented PHY engine boosts RAN throughput by 40–60% using software-only upgrades — no new spectrum, no new antennas, just smarter bits."
    },
    {
      title: "Optimized Networking",
      subtitle: "Next-gen Wired & Wireless Solutions",
      desc: "Built on ANSpect suite of advanced software and firmware technologies, ANSpect enhances capacity and spectral efficiency of modern networks."
    },
    {
      title: "Satellite Acceleration",
      subtitle: "Maximize throughput over satellite links",
      desc: "Operators can deliver faster, more reliable connectivity while reducing overall cost-per-bit."
    }
  ];

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  const solutions = [
    { title: "Open RAN & Wi‑Fi", desc: "Software-defined optimization for next-gen Wi-Fi and open RAN infrastructures.", img: "https://www.shutterstock.com/shutterstock/videos/3447871571/thumb/12.jpg?ip=x480" },
    { title: "Wired Network Optimization", desc: "Enhanced cable and edge networking through software-defined optimization on existing infrastructure.", img: "https://www.cynergytech.com/wp-content/uploads/2022/12/network-cabling.jpg" },
    { title: "Satellite Link Acceleration", desc: "Maximize data throughput over satellite links with our adaptive coding and transport optimizations.", img: "https://antesky.com/wp-content/uploads/2024/04/satellite-internet.jpg" },
    { title: "Super Capacity Mode", desc: "Boost 4G, 5G, and 6G network capacity with 40–60% more throughput per sector.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIUQt86TVeLOGTb_I_h65r9TYl-Mh8Y0cISmeVyF6IQAEAicDx" },
    { title: "Enterprise Wireless Network", desc: "Supercharge enterprise Wi-Fi and private cellular deployments with software-defined enhancements.", img: "https://i.ytimg.com/vi/tZdwWGrzqLM/mqdefault.jpg" },
    { title: "Cable Network", desc: "Enhance DOCSIS and other cable networks through adaptive software modules.", img: "https://i.pinimg.com/736x/74/d4/9a/74d49ac3a627d1618e218d3aa5810a3e.jpg" },
    { title: "Satellite Data Network", desc: "Improve satellite broadband performance with adaptive coding and transport optimizations.", img: "https://img.yicaiglobal.com/src/image/2021/06/13986680235360256.jpg" },
    { title: "Tiered Licensing & Add-On Revenue", desc: "Package ANSpect as a 'Super Capacity Mode' add-on that unlocks extra throughput per sector, generating higher recurring software revenue without new hardware.", img: "https://i.pinimg.com/736x/8c/a0/14/8ca014414af7c9535ad63917fa87f801.jpg" },
    { title: "Easy Deployment / No New Hardware", desc: "Drops into existing PHY/RLC/MAC stack with no new spectrum or RF upgrades required, simplifying deployment on current infrastructure.", img: "https://i.pinimg.com/1200x/9a/79/03/9a790369ff4a5d3e9ba82b3ddfcd6153.jpg" }
  ];

  return (
    <>
      {/* Hero Section */}
      <header className="relative w-full h-[700px] md:h-[600px] text-white overflow-hidden mt-16">
        {/* Video Background */}
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src={techVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay with carousel text */}
        <motion.div
          key={currentSlide} // force animation on slide change
          className="absolute inset-0 flex flex-col justify-center bg-blue-950/35 items-center text-center px-6 md:px-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-[0_15px_15px_rgba(0,0,0,0.6)]">
            {heroSlides[currentSlide].title}
          </h1>
          <h2 className="text-xl md:text-3xl font-semibold mb-6 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
            {heroSlides[currentSlide].subtitle}
          </h2>
          <p className="max-w-3xl text-gray-200 text-left md:text-left ">
            {heroSlides[currentSlide].desc}
          </p>
          <div className="mt-6">
            <Link to="/services">
              <Button className="px-10 py-4 text-white rounded-xl text-lg font-semibold shadow-2xl backdrop-blur-sm hover:scale-110 transition-transform duration-300 hover:shadow-[0_0_25px_rgba(5,150,105,0.5)]">
                Our Services
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-5 transform -translate-y-1/2 text-white text-3xl font-bold p-2 rounded-full hover:bg-black/60"
        >
          &#8592;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-5 transform -translate-y-1/2 text-white text-3xl font-bold p-2 rounded-full hover:bg-black/60"
        >
          &#8594;
        </button>
      </header>

      {/* Solutions Section */}
      {/* Solutions Section */}
      <section id="solutions" className="py-20">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-black"
        >
          Our Solutions
        </motion.h2>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {solutions.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden shadow-xl group cursor-pointer h-[300px] flex items-end"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${s.img})` }}
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Text Content */}
              <div className="relative z-10 p-6 text-white">
                <h3 className="text-2xl font-bold mb-3">{s.title}</h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      <ProductBanner />


      {/* Our Story */}
      <section
        id="ourstory"
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-gradient-to-br from-white to-[#F6FBFF] rounded-3xl p-8 border border-blue-50 shadow-sm"
      >
        <div className="w-full">
          {[...Array(1)].map((_, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.03 }}
              className="rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(59,130,246,0.5)]"
            >
              <video
                src={ansVid}
                controls
                className="w-full h-full object-cover"
              />
            </motion.div>


          ))}
        </div>

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 inline-block">Our Story</h2>
          <div className="mt-3 w-16 h-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-400" />
          <p className="mt-6 text-gray-700 leading-relaxed">
            From early academic work to real-world testbeds, our story is about converting theory into deployable software that delivers measurable capacity gains for networks worldwide.
          </p>
          <div className="mt-6 flex gap-3">
            <Link
            to = "/about#company"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-gray-900 text-white shadow-lg hover:scale-105 transition">
              Our Mission
            </Link>
            <Link
              to="/#contact"
              className="px-5 py-2 rounded-full border border-gray-200 text-slate-900 hover:bg-blue-50 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>


      {/* Contact Section */}
      {/* Contact Section 
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12">

          
          <div className="p-10 bg-gray-100 rounded-3xl shadow-lg flex flex-col justify-center border border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>

            <p className="text-gray-700 mb-4">
              Email:{" "}
              <a
                href="mailto:sales@anspect.com"
                className="text-aramcoGreen font-medium underline"
              >
                sales@anspect.com
              </a>
            </p>

            <p className="text-gray-700 mb-4">
              Phone:{" "}
              <a
                href="tel:+1234567890"
                className="text-aramcoGreen font-medium underline"
              >
                +1 (234) 567-890
              </a>
            </p>

            <p className="text-gray-700 mb-4">
              Address: 123 ANSpect Street, Tech City, Country
            </p>

            <p className="text-gray-600 leading-relaxed">
              Our team is ready to assist with inquiries, trials, POCs, and enterprise deployments.
            </p>
          </div>

          
          <form
            className="p-10 bg-white rounded-3xl shadow-lg border border-gray-200 flex flex-col gap-5"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Form submitted!");
            }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Contact Us</h2>
            <p className="text-gray-600 mb-4">
              Send us a message and our team will get back to you shortly.
            </p>

            <input
              type="text"
              placeholder="Your Name"
              className="p-4 rounded-xl border border-gray-300 focus:border-aramcoGreen focus:ring-aramcoGreen outline-none transition-all"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="p-4 rounded-xl border border-gray-300 focus:border-aramcoGreen focus:ring-aramcoGreen outline-none transition-all"
            />

            <input
              type="text"
              placeholder="Company (optional)"
              className="p-4 rounded-xl border border-gray-300 focus:border-aramcoGreen focus:ring-aramcoGreen outline-none transition-all"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="p-4 rounded-xl border border-gray-300 focus:border-aramcoGreen focus:ring-aramcoGreen outline-none transition-all"
            />

            <Button
              type="submit"
              className="mt-2 px-6 py-3 bg-aramcoGreen font-semibold rounded-xl hover:scale-105 transition-transform duration-300 text-white"
            >
              Send Message
            </Button>
          </form>

        </div>
      </section>*/}

      <Contact />

      <Footer />
    </>
  );
}
