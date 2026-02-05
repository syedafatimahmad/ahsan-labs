import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Waves, TrendingUp, Cpu } from "lucide-react";

import Button from "../../components/customer/Button";
import Footer from "../../components/customer/Footer";
import techVideo from "../../assets/tech.mp4";

import ansVid from "../../assets/videos/femaleanspectrevised.mp4";

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
            className="w-full text-gray-100 text-2xl md:text-center leading-relaxed"
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
            <Link to="/technology">
              <Button
                className="font-semibold">Explore the Technology</Button>
            </Link>
          </motion.div>
        </motion.div>
      </header>





      {/* ANSPECT OVERVIEW */}
      <section
        id="anspectoverview"
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-8 py-20 border shadow-sm"
      >
        {/* Video */}
        <div>
          <h2 className="text-5xl font-bold text-blue-900 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] ">ANSpect Overview</h2>
          <div className="mt-6 text-2xl space-y-4 text-gray-700">
            <p>
              ANSpect delivers significant capacity and spectral-efficiency gains through advanced PHY-layer innovation.
            </p>
            <p>
              It is deployable via software and firmware updates, without requiring new spectrum or disruptive hardware upgrades.
            </p>
          </div>
        </div>

        <div className="w-full max-w-4xl mx-auto">
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="overflow-hidden shadow-[0_10px_40px_rgba(59,130,246,0.12)]"
          >
            <video
              src={ansVid}
              controls
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Text */}
        
      </section>


      

      {/* What We do */}
      <section
      className="relative min-h-screen w-full bg-cover bg-center py-15 px-6 mb-24"
      style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/previews/055/370/705/large_2x/abstract-visualization-of-interconnected-nodes-and-lines-representing-a-digital-network-photo.jpg')",
      }}
    >
      {/* Dark overlay so text doesn’t die */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative w-full mx-auto text-white">
        
        <h2 className="text-6xl text-center font-bold mb-5 mt-5">What We Do</h2>
        <p className="text-center mx-auto mb-10 text-2xl whitespace-nowrap text-white/80">
  Increase spectral efficiency and network capacity using software-defined
  physical-layer technologies.
</p>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
            <span className="inline-block mb-3 px-3 py-1 text-sm bg-white/10 rounded-full">
              Overview
            </span>
            <p className="text-lg leading-relaxed">
              Modern communication networks are under constant pressure—traffic growth
              continues to outpace available spectrum, while hardware refresh cycles remain
              slow and capital-intensive. ANSpect develops{" "}
              <strong>software-defined PHY-layer technologies</strong> that unlock unused
              capacity in existing networks by enhancing symbol utilization and mapping
              efficiency.
            </p>
          </div>

          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
            <span className="inline-block mb-3 px-3 py-1 text-sm bg-white/10 rounded-full">
              Why Now
            </span>
            <p className="text-lg leading-relaxed">
              Spectrum is scarce, demand keeps growing, and hardware alone can’t close the
              gap. ANSpect bridges this gap with a practical path to higher throughput,
              higher user density, and better utilization of deployed infrastructure.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
          <Waves className="w-7 h-7 mb-3 text-white/80" />
            <h3 className="font-semibold text-lg mb-2">Spectrum Is Finite</h3>
            <p className="text-lg">
              New spectrum is scarce, expensive, and slow to deploy—efficiency matters
              more than ever.
            </p>
          </div>

          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
          <TrendingUp className="w-7 h-7 mb-3 text-white/80" />
            <h3 className="font-semibold text-lg mb-2">Demand Keeps Growing</h3>
            <p className="text-lg">
              Video, cloud, AI, and connected devices continue driving network load upward.
            </p>
          </div>

          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
          <Cpu className="w-7 h-7 mb-3 text-white/80" />
            <h3 className="font-semibold text-lg mb-2">Hardware Isn’t the Only Answer</h3>
            <p className="text-lg">
              Upgrade cycles take years and significant capital—ANSpect targets faster time-to-value.
            </p>
          </div>
        </div>
      </div>
    </section>

      <Contact />

      <Footer />
    </>
  );
}