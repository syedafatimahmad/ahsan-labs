import React, { useState } from "react";
import Footer from "../../components/customer/Footer";
import tech from "../../assets/tech.mp4";
import { motion } from "framer-motion";
import Card from "../../components/customer/Card"; // adjust path if needed

const industries = [
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

export default function Industries() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      {/* Hero */}
      <section id="industries" className="relative w-full h-100 top-3.5 bg-blue-950 overflow-hidden">
        {/* Background Video */}
              <video
                src={tech}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-40"
              /> 
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center  text-gray-800 px-8">
          

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 text-6xl md:text-6xl lg:text-7xl mt-6 font-extrabold text-white leading-tight"
          >
            Industries
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="relative z-10 mt-4 md:text-2xl text-left text-gray-200 max-w-6xl"
          >
            ANSpect enables significant capacity and spectral-efficiency gains through advanced PHY-layer innovation— deployable via software and firmware, without new spectrum or disruptive hardware upgrades.
          </motion.p>
        </div>
      </section>

      {/* Industries grid */}
      <section className="py-2 mt-10">
        <div className="max-w-8xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
          {industries.map((s, idx) => (
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

      <Footer />
    </>
  );
}
