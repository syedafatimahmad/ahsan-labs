import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";

import Button from "../../components/customer/Button";
import Footer from "../../components/customer/Footer";
import techVideo from "../../assets/tech.mp4";

//import Image from "../../assets/images/logo.png";

import ansVid from "../../assets/videos/femaleanspect.mp4";

import Contact from "../../components/customer/Contact";

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

      {/* ANSpect Overview - two-column layout: text left, image holder right */}
      <section
        id="anspect-overview"
        aria-labelledby="anspect-overview-heading"
        className="relative py-16 overflow-visible bg-gradient-to-r from-sky-50 via-white to-indigo-50 "
      >
        {/* Soft decorative shapes (kept) */}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -top-28 -left-28 w-96 h-96 rounded-full opacity-40"
          initial={{ scale: 0.95, opacity: 0.25 }}
          animate={{ scale: 1.05, opacity: 0.35 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        >
        </motion.div>



        <motion.div
          className="max-w-6xl mx-auto px-6 relative z-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Grid: text left, image right on md+; stacked on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            {/* Left: text panel */}
            <div>
                <h2
                  id="anspect-overview-heading"
                  className="text-2xl sm:text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-3"
                >
                  ANSpect Overview
                </h2>
                <p className="text-gray-700 text-lg sm:text-lg md:text-xl leading-relaxed mb-6">
                  ANSpect enables significant capacity and spectral-efficiency gains through advanced
                  PHY-layer innovation— deployable via software and firmware, without new spectrum or
                  disruptive hardware upgrades.
                </p>

                <div className="flex flex-col text-white sm:flex-row gap-3 sm:gap-4 justify-start">

                  <a
                    href="#video"
                  >
                    <Button
                    className="shadow hover:scale-[1.02] transition transform font-semibold"
                    >
                    Learn More
                    </Button>
                  </a>
                </div>
             
            </div>

            {/* Right: image holder */}
            <div className="flex justify-center md:justify-end">
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="w-full h-64 md:h-72 flex items-center justify-center">
  

                  {/* Decorative placeholder illustration */}
                  <img src="/logo.png" alt="ANSpect Technology" className="w-full max-w-xs sm:max-w-sm md:max-w-md" />

                </div>

              </motion.div>
            </div>
          </div>
        </motion.div>

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
      </section>

      {/* Video - overlap to avoid seam */}


      <Contact />

      <Footer />
    </>
  );
}