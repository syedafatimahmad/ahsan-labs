import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Button from "../../components/customer/Button";
import Footer from "../../components/customer/Footer";
import techVideo from "../../assets/tech.mp4";
import ProductBanner from "../../components/customer/ProductBanner";
import Card from "../../components/customer/Card";

import ansVid from "../../assets/videos/femaleanspect.mp4";

import Contact from "../../components/customer/Contact";

export default function Home() {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeIndex, setActiveIndex] = useState(null);

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
      title: "Unlocking Hidden Capacity in Existing Networks",
      subtitle: "ANSpect enables significant capacity and spectral-efficiency gains through advanced PHY-layer innovation— deployable via software and firmware, without new spectrum or disruptive hardware upgrades.",
      desc: "Built with standards awareness (e.g., 3GPP, DOCSIS) and designed for backward-compatible deployment paths."
    }
    // {
    //   title: "Optimized Networking",
    //   subtitle: "Next-gen Wired & Wireless Solutions",
    //   desc: "Built on ANSpect suite of advanced software and firmware technologies, ANSpect enhances capacity and spectral efficiency of modern networks."
    // },
    // {
    //   title: "Satellite Acceleration",
    //   subtitle: "Maximize throughput over satellite links",
    //   desc: "Operators can deliver faster, more reliable connectivity while reducing overall cost-per-bit."
    // }
  ];

  // const nextSlide = () =>
  //   setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  // const prevSlide = () =>
  //   setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  // // Auto-slide every 6 seconds
  // useEffect(() => {
  //   const timer = setInterval(nextSlide, 6000);
  //   return () => clearInterval(timer);
  // }, []);

  const solutions = [
    {
      title: "Cellular (4G / 5G NR)",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIUQt86TVeLOGTb_I_h65r9TYl-Mh8Y0cISmeVyF6IQAEAicDx",
      summary: "More capacity in existing spectrum",
      details: [
        "Enhance downlink spectral efficiency and utilization in high-traffic deployments.",
        "Increased cell capacity",
        "Improved spectral efficiency",
        "Better use of spectrum assets",
      ],
    },
    {
      title: "Fixed Wireless Access (FWA)",
      img: "https://i.ytimg.com/vi/tZdwWGrzqLM/mqdefault.jpg",
      summary: "Consistency across varied link conditions",
      details: [
        "Improve per-sector capacity and service stability, especially near the cell edge.",
        "Higher user density per sector",
        "Improved consistency and reliability",
        "Extended reach without new hardware",
      ],
    },
    {
      title: "Cable (DOCSIS)",
      img: "https://i.pinimg.com/736x/74/d4/9a/74d49ac3a627d1618e218d3aa5810a3e.jpg",
      summary: "Efficiency that extends infrastructure ROI",
      details: [
        "Complement OFDM-based PHY designs by improving symbol efficiency within existing channel structures.",
        "Increased downstream capacity",
        "Improved efficiency without plant overhaul",
        "Extends HFC investment lifecycle",
      ],
    },
    {
      title: "Satellite & NTN",
      img: "https://antesky.com/wp-content/uploads/2024/04/satellite-internet.jpg",
      summary: "More bits per hertz where it matters most",
      details: [
        "Spectrum-limited environments benefit directly from improved efficiency and scalability.",
        "Better utilization of expensive spectrum",
        "Improved capacity scalability",
        "Operational and economic gains",
      ],
    },
    {
      title: "IoT & Massive Connectivity",
      img: "https://i.pinimg.com/736x/8c/a0/14/8ca014414af7c9535ad63917fa87f801.jpg",
      summary: "Scale to dense device environments",
      details: [
        "Support efficient spectrum use where reliability and density are critical.",
        "Improved handling of massive device counts",
        "Efficient spectrum usage",
        "Potential power-efficiency advantages",
      ],
    },
    {
      title: "Cross-Vertical",
      img: "https://i.pinimg.com/1200x/9a/79/03/9a790369ff4a5d3e9ba82b3ddfcd6153.jpg",
      summary: "Designed for practical deployment",
      details: [
        "Standards-aware, backward-compatible paths, and operator-grade performance focus.",
        "Software/firmware deployment options",
        "Compatible integration approaches",
        "Patent-backed innovation",
      ],
    },
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

        {/* Enhanced Overlay with gradient and animations */}
        <div className="absolute inset-0 bg-blue-950/40" />
        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-[0_15px_15px_rgba(0,0,0,0.8)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Unlocking Hidden Capacity in Existing Networks
          </motion.h1>
          <motion.h2
            className="text-xl md:text-3xl font-semibold mb-6 drop-shadow-[0_10px_10px_rgba(0,0,0,0.7)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            ANSpect enables significant capacity and spectral-efficiency gains through advanced PHY-layer innovation— deployable via software and firmware, without new spectrum or disruptive hardware upgrades.
          </motion.h2>
          <motion.p
            className="max-w-3xl text-gray-100 text-left md:text-center leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Built with standards awareness (e.g., 3GPP, DOCSIS) and designed for backward-compatible deployment paths.
          </motion.p>
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Link to="/services">
              <Button >
                Explore the Technology
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          onClick={() => document.getElementById('industries')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="flex flex-col items-center text-white/70 hover:text-white transition-colors">
        
          </div>
        </motion.div>

        {/* Arrows */}
        {/* <button
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
        </button> */}
      </header>

      {/* Industries Section */}
      {/* Industries Section */}
      <section id="industries" className="py-20">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-black"
        >
          Industries
        </motion.h2>

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {solutions.map((s, idx) => (
            <Card
              key={idx}
              data={s}
              isOpen={activeIndex === idx}
              onClick={() =>
                setActiveIndex(activeIndex === idx ? null : idx)
              }
            />
          ))}


        </div>
      </section>


     {/* <ProductBanner /> */}


      {/* Our Story */}
      <section
        id="ourstory"
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-linear-to-br from-white to-[#F6FBFF] rounded-3xl p-8 border border-blue-50 shadow-sm"
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
          <div className="mt-3 w-16 h-1 rounded-full bg-linear-to-r from-blue-600 to-indigo-400" />
          <p className="mt-6 text-gray-700 leading-relaxed">
            <span className="block">
              <strong>ANSpect</strong> was born at the intersection of deep research and real-world execution.
              The journey began years earlier with <strong>Dr. Ahsan Naim</strong>, whose doctoral research explored the fundamental limits of wireless capacity and spectrum efficiency.
            </span>

            <span className="block">
              That work led to the invention of <strong>BOMA (Building Block Orthogonal Multiple Access)</strong>—a breakthrough approach designed to unlock significant capacity gains in existing networks without requiring new spectrum or disruptive hardware changes.
            </span>

            <span className="block">
              Recognizing the broader potential of the technology, Ahsan continued to refine and expand BOMA through his research company, <strong>AhsanLabs</strong>, with a long-term vision of translating advanced theory into deployable, operator-grade solutions.
            </span>

            {isExpanded && (
              <>
                <span className="block">
                  As the technology matured, it became clear that realizing its full impact would require more than technical excellence alone.
                  It would need experienced leadership, a strong go-to-market strategy, and the ability to scale across global telecom ecosystems.
                </span>

                <span className="block">
                  That realization led to a partnership with <strong>Surya Panditi</strong>, a seasoned executive with a proven track record of building and leading technology companies—from early growth stages through large-scale commercialization, including successfully guiding a company to IPO.
                </span>

                <span className="block">
                  Together, Ahsan and Surya co-founded <strong>ANSpect Technologies</strong> to bridge the gap between cutting-edge wireless innovation and commercial deployment.
                  Today, <strong>Surya serves as CEO</strong>, leading strategy, partnerships, and market execution, while <strong>Ahsan serves as CTO</strong>, driving the technical vision, architecture, and continued evolution of the core technology.
                </span>

                <span className="block">
                  Their complementary backgrounds—one rooted in deep technical innovation, the other in executive leadership and commercialization—form the foundation of ANSpect's approach.
                </span>

                <span className="block">
                  ANSpect's story is ultimately about <strong>collaboration</strong>: between research and industry, theory and practice, innovation and execution.
                  It reflects a shared belief that transformative advances in connectivity don't always require rebuilding networks from scratch—but rather, rethinking how intelligently we use what already exists.
                </span>

                <span className="block">
                  With a focus on standards compliance and backward compatibility, ANSpect ensures seamless integration into existing telecom infrastructures, enabling operators to achieve higher throughput and efficiency without costly overhauls.
                  Our commitment to innovation drives us to continuously evolve our technology, addressing the growing demands of modern networks and preparing for the future of wireless communication.
                </span>
              </>
            )}
          </p>
          <div className="mt-6 flex gap-3">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-linear-to-r from-gray-600 to-gray-800 text-white shadow-lg hover:scale-105 transition"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
            <Link
              to="/about#company"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-linear-to-r from-blue-600 to-gray-900 text-white shadow-lg hover:scale-105 transition"
            >
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

      <Contact />

      <Footer />
    </>
  );
}
