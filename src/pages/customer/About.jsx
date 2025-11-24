import React from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/customer/Navbar";
import Footer from "../../components/customer/Footer";

import StatsCard from "../../components/customer/StatsCard";
import VideoCard from "../../components/customer/VideoCard";
import DocumentCard from "../../components/customer/DocumentCard";
import TimelineItem from "../../components/customer/TimelineItem";

import opsVideo from "../../assets/videos/operations.mp4";
import sustVideo from "../../assets/videos/sustainability.mp4";

export default function About() {
  const stats = [
    { title: "Issued US & international patents", value: "150+" },
    { title: "Years in wireless systems design", value: "20+" },
    { title: "Cellular, WiFi, DOCSIS, mmWave", value: "Multi-RAT roadmap" },
    { title: "Across Tier-1 operators & vendors", value: "Experience" },
  ];

  const videos = [
    { title: "Our Operations", src: opsVideo },
    { title: "Sustainability Journey", src: sustVideo },
  ];

  const documents = [
    { title: "Indoor 5G NR validation", description: "End-to-end validation across MCS, CQI, scheduling, and multi-user PHY interactions."},
    { title: "Outdoor FWA trials", description: "Real-world trials measuring per-UE throughput, cell-edge speed, and sector capacity improvements."},
    { title: "Joint publications", description: "AhsanLabs supports joint research publications and sharing of test results with operators and vendors."},
  ];

  const timeline = [
    { year: "Early Work", title: "Foundations in Wireless Engineering", description: "Initial research in modulation, channel estimation, and PHY-layer innovation begins, forming the basis for high-capacity wireless systems." },
    { year: "Breakthroughs", title: "Advanced PHY Techniques", description: "Development of block-sparse constellation mapping and cross-user capacity embedding — techniques later validated on real 5G NR testbeds." },
    { year: "Collaboration", title: "Academic & Industry Testbeds", description: "Extensive indoor and outdoor 5G trials conducted with partners to validate throughput gains, scheduler behavior, and cell-edge performance." },
    { year: "Today", title: "Scaling Next-Gen Wireless", description: "AhsanLabs continues advancing PHY-layer software for cellular, WiFi, DOCSIS, and mmWave systems, enabling operators to achieve higher capacity without new hardware." },
  ];

  const careers = [
    {
      title: "Software Engineer - PHY",
      location: "Remote / California, USA",
      type: "Full-Time",
      description: "Develop and optimize our software-defined PHY engine to maximize wireless capacity on 4G, 5G, and beyond."
    },
    {
      title: "Network Solutions Architect",
      location: "Remote / Europe",
      type: "Full-Time",
      description: "Design end-to-end network solutions leveraging AhsanLabs PHY capabilities and Open RAN technologies."
    },
    {
      title: "Test & Validation Engineer",
      location: "Remote / APAC",
      type: "Contract",
      description: "Perform real-world 5G testbed validations, measuring throughput, latency, and spectral efficiency."
    }
  ];

  const phyPoints = [
    { title: "Block-sparse constellation mapping", description: "Encodes extra information into under-utilized regions of the QAM constellation while staying within EVM targets and RF linearity constraints." },
    { title: "Cross-user capacity embedding", description: "Leverages channel quality differences between UEs to 'piggyback' extra bits during transmissions dominated by weaker links." },
    { title: "Drop-in PHY module", description: "Integrates as a software module alongside existing 4G/5G PHY blocks with minimal changes to RFIC or scheduler." }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-body">
      <Navbar />

      {/* Premium Hero */}
      <header className="relative w-full h-[72vh] flex items-center justify-center text-white overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover opacity-30"
        >
          <source src={opsVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight bg-gradient-to-br from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-sm">
            About Ahsan Labs
          </h1>

          <p className="text-left text-base md:text-xl leading-relaxed mx-auto max-w-4xl text-gray-100/90 backdrop-blur-sm p-6 rounded-2xl bg-white/5 shadow-lg border border-white/10">
            Ahsan Labs, led by Dr. Ahsan Naim—inventor on 150+ issued patents and former CTO at multiple wireless companies—is built by wireless inventors, not just coders. Our software-defined PHY technology turns existing spectrum and hardware into dramatically higher wireless capacity. From mmWave FWA to 4G/5G RAN and DOCSIS, our team brings decades of experience turning theoretical gains into deployable products, pushing the boundaries of 4G, 5G, and future 6G systems with advanced PHY-layer intelligence and real-world research.
          </p>
        </motion.div>
      </header>

      <main className="space-y-28 px-4 md:px-8 lg:px-20 py-16">

        <section aria-labelledby="stats-heading">
          <h2 id="stats-heading" className="sr-only">At a Glance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="backdrop-blur-xl bg-gradient-to-br from-white/3 to-black/20 border border-white/10 p-8 rounded-3xl shadow-2xl text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-aramcoGreen mb-2">{stat.value}</p>
                <p className="text-gray-300 text-sm md:text-base">{stat.title}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section id="How it works"aria-labelledby="how-heading" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 id="how-heading" className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-300 mb-6">
              Our advanced PHY-layer software unlocks capacity from existing spectrum and hardware. We validate ideas in simulation first, then prove them with real testbeds.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: "PHY-Layer Optimization",
                  desc: "Modulation, mapping and capacity embedding that operates within RF limits."
                },
                {
                  title: "Simulation & Validation",
                  desc: "End-to-end validation across link-level and system-level testbeds."
                },
                {
                  title: "Deployment",
                  desc: "Drop-in software modules compatible with existing PHY stacks."
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-3 h-3 rounded-full bg-aramcoGreen mt-2" />
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <video autoPlay muted loop playsInline className="w-full h-64 md:h-full object-cover">
              <source src={sustVideo} type="video/mp4" />
            </video>
          </div>
        </section>

        {/* PHY Engine */}
        <section id="phy engine" aria-labelledby="phy-heading" className="text-center">
          <h2 id="phy engine" className="text-3xl md:text-4xl font-bold mb-8">Inside AhsanLabs PHY Engine</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {phyPoints.map((item, idx) => (
              <motion.article key={idx} whileHover={{ y: -6 }} className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/30 to-black/30 border border-white/6 shadow-xl">
                <h3 className="text-lg font-semibold text-aramcoGreen mb-2">{item.title}</h3>
                <p className="text-gray-300 text-left text-sm leading-relaxed">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Careers */}
        <section id="careers" aria-labelledby="careers">
          <h2 id="careers" className="text-3xl md:text-4xl font-bold text-center mb-8">Careers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {careers.map((job, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.02 }} className="p-6 rounded-2xl bg-white/4 border border-white/8 shadow-lg">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-aramcoGreen">{job.title}</h3>
                    <p className="text-gray-400 text-sm">{job.location} • {job.type}</p>
                  </div>
                  <div className="text-sm text-gray-300 max-w-lg">{job.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Documents & Videos */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold">Our Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((v, i) => (
                <VideoCard key={i} title={v.title} src={v.src} />
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <h3 className="text-xl font-semibold">Proven on Real 5G Testbeds</h3>
            <div className="space-y-4">
              {documents.map((d, i) => (
                <DocumentCard key={i} title={d.title} description={d.description} />
              ))}
            </div>
          </aside>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our History</h2>
          <div className="space-y-4">
            {timeline.map((t, i) => (
              <TimelineItem key={i} year={t.year} title={t.title} description={t.description} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-8 p-8 rounded-2xl bg-gradient-to-r from-black/50 via-gray-900/40 to-black/50 border border-white/6 text-center">
          <h3 className="text-2xl font-bold mb-2">Join Us on Our Mission</h3>
          <p className="text-gray-300">We combine deep wireless expertise with real-world experimentation to build the next generation of high-capacity software-defined networks.</p>
        </section>

      </main>

      <Footer />
    </div>
  );
}
