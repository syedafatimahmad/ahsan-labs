import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";

import Button from "../../components/customer/Button";
import Footer from "../../components/customer/Footer";
import techVideo from "../../assets/tech.mp4";

//import Image from "../../assets/images/logo.png";

import ansVid from "../../assets/videos/femaleanspect.mp4";

import Contact from "../../components/customer/Contact";

const INFO_SECTIONS = [
  {
    id: "anspect-overview",
    title: "Anspect Overview",
    text: "ANSpect enables significant capacity and spectral-efficiency gains through advanced PHY-layer innovation— deployable via software and firmware, without new spectrum or disruptive hardware upgrades.",
    bg: "bg-[url('/1.jpg')]",
  },
  {
    id: "what-we-do",
    title: "What We Do",
    text: "Modern communication networks are under constant pressure—traffic growth continues to outpace available spectrum, while hardware refresh cycles remain slow and capital-intensive. ANSpect develops software-defined PHY-layer technologies that unlock unused capacity in existing networks by enhancing symbol utilization and mapping efficiency.",
    bg: "bg-[url('https://static.vecteezy.com/system/resources/previews/055/370/705/large_2x/abstract-visualization-of-interconnected-nodes-and-lines-representing-a-digital-network-photo.jpg')]",
  },
  {
    id: "why-now",
    title: "Why Now",
    text: "Spectrum is scarce, demand keeps growing, and hardware alone can’t close the gap. ANSpect bridges this gap with a practical path to higher throughput, higher user density, and better utilization of deployed infrastructure.",
    bg: "bg-[url('https://images.unsplash.com/photo-1526378722484-bd91ca387e72')]",
  },
  {
    id: "spectrum-is-finite",
    title: "Spectrum Is Finite",
    text: "New spectrum is scarce, expensive, and slow to deploy—efficiency matters more than ever.",
    bg: "bg-[url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee')]",
  },
  {
    id: "demand-keeps-growing",
    title: "Demand Keeps Growing",
    text: "Video, cloud, AI, and connected devices continue driving network load upward.",
    bg: "bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')]",
  },
  {
    id: "hardware-isnt-the-only-answer",
    title: "Hardware Isn’t the Only Answer",
    text: "Upgrade cycles take years and significant capital—ANSpect targets faster time-to-value.",
    bg: "bg-[url('https://images.unsplash.com/photo-1581090700227-1e37b190418e')]",
  },
];

export default function Home() {
  const location = useLocation();

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
      subtitle:
        "ANSpect enables significant capacity and spectral-efficiency gains through advanced PHY-layer innovation— deployable via software and firmware, without new spectrum or disruptive hardware upgrades.",
      desc: "Built with standards awareness (e.g., 3GPP, DOCSIS) and designed for backward-compatible deployment paths.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <header className="relative w-full h-[600px] md:h-[700px] lg:h-[600px] text-white overflow-hidden mt-16">
        {/* Video Background */}
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src={techVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Enhanced Overlay with gradient and animations */}
        <div className="absolute inset-0 bg-blue-950/40" />
        <motion.div
          className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-10 md:px-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 drop-shadow-[0_15px_15px_rgba(0,0,0,0.8)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Unlocking Hidden Capacity in Existing Networks
          </motion.h1>

          <motion.p
            className="max-w-3xl text-gray-100 text-left sm:text-center leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Built with standards awareness (e.g., 3GPP, WiFi, DOCSIS) and designed for backward-compatible deployment paths.
          </motion.p>
          <motion.div
            className="mt-6 sm:mt-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Link to="/about#technology">
              <Button
                className="font-semibold">Explore the Technology</Button>
            </Link>
          </motion.div>
        </motion.div>
      </header>



      {/* ================= INFO SECTIONS ================= */}
{INFO_SECTIONS.map((item) => (
  <section
    key={item.id}
    id={item.id}
    className={`
      relative min-h-screen w-full
      ${item.bg} bg-cover bg-center
      flex items-center
      scroll-mt-16
    `}
  >
    {/* Static overlay */}
    <div className="absolute inset-0 bg-black/55" />

    {/* Animated text only */}
    <motion.div
      className="relative z-10 max-w-6xl mx-auto px-6 text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-4xl md:text-5xl font-semibold mb-6">
        {item.title}
      </h2>
      <p className="text-lg mb-4 md:text-xl max-w-3xl leading-relaxed">
        {item.text}
      </p>
      <a href="#video">
              <Button className="font-semibold">Learn More</Button>
            </a>
    </motion.div>
  </section>
))}
      {/* ================= END INFO SECTIONS ================= */}


        

        <section
          id="video"
          className="relative -mt-8 pt-24 grid grid-cols-1 lg:grid-cols-1 gap-10 items-center bg-transparent p-8 shadow-none"
        >
          <div className="w-full max-w-4xl mx-auto">
            {[...Array(1)].map((_, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="rounded-xl overflow-hidden shadow-[0_10px_40px_rgba(59,130,246,0.12)]"
              >
                <video
                  src={ansVid}
                  controls
                  className="w-full h-full object-cover rounded-xl"
                />
              </motion.div>
            ))}
          </div>
        </section>
     

      {/* Video - overlap to avoid seam */}


      <Contact />

      <Footer />
    </>
  );
}