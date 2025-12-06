import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

import Footer from "../../components/customer/Footer";

import VideoCard from "../../components/customer/VideoCard";
import DocumentCard from "../../components/customer/DocumentCard";
import TimelineItem from "../../components/customer/TimelineItem";
import StatsCard from "../../components/customer/StatsCard";

import opsVideo from "../../assets/videos/ansvid.mp4";
import techVideo from "../../assets/tech.mp4";
import { Link } from "react-router-dom";

/**
 * Bold Innovation About page — modern hero, gradients, glass cards, neon accents.
 */

export default function About() {
  const stats = [
    { title: "Issued US & international patents", value: "150+" },
    { title: "Years in wireless systems design", value: "20+" },
    { title: "Cellular, WiFi, DOCSIS, mmWave", value: "Multi-RAT roadmap" },
    { title: "Across Tier-1 operators & vendors", value: "Experience" },
  ];

  const videos = [
    { title: "Our Mission", src: opsVideo },
  ];

  const documents = [
    {
      title: "Indoor 5G NR validation",
      description:
        "End-to-end validation across MCS, CQI, scheduling, and multi-user PHY interactions.",
    },
    {
      title: "Outdoor FWA trials",
      description:
        "Real-world trials measuring per-UE throughput, cell-edge speed, and sector capacity improvements.",
    },
    {
      title: "Joint publications",
      description:
        "ANSpect supports joint research publications and sharing of test results with operators and vendors.",
    },
  ];

  const timeline = [
    {
      year: "Early Work",
      title: "Foundations in Wireless Engineering",
      description:
        "Initial research in modulation, channel estimation, and PHY-layer innovation begins.",
    },
    {
      year: "Breakthroughs",
      title: "Advanced PHY Techniques",
      description:
        "Development of block-sparse constellation mapping and cross-user capacity embedding.",
    },
    {
      year: "Collaboration",
      title: "Academic & Industry Testbeds",
      description:
        "Indoor & outdoor 5G trials validating throughput gains and scheduler behavior.",
    },
    {
      year: "Today",
      title: "Scaling Next-Gen Wireless",
      description:
        "ANSpect advances PHY-layer software for cellular, WiFi, DOCSIS, and mmWave systems.",
    },
  ];

  const team = [
    {
      name: "Dr. Ahsan Naim",
      role: "Founder & Chief Scientist",
      img: "https://static.vecteezy.com/system/resources/thumbnails/041/641/689/small/3d-character-people-close-up-portrait-smiling-nice-3d-avartar-or-icon-png.png",
      desc: "Inventor on 150+ patents, former CTO, expert in multi-RAT PHY design.",
    },
    {
      name: "Sarah Malik",
      role: "Lead Systems Engineer",
      img: "https://static.vecteezy.com/system/resources/thumbnails/041/641/689/small/3d-character-people-close-up-portrait-smiling-nice-3d-avartar-or-icon-png.png",
      desc: "Specializes in RF optimization and testbed validation for real-world deployments.",
    },
    {
      name: "Daniel Lee",
      role: "Senior PHY Developer",
      img: "https://static.vecteezy.com/system/resources/thumbnails/041/641/689/small/3d-character-people-close-up-portrait-smiling-nice-3d-avartar-or-icon-png.png",
      desc: "Works on SD-PHY modules for 4G/5G and mmWave platforms.",
    },
  ];

  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased font-body">
      {/* HERO */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        {/* Background Video */}
        <video autoPlay muted loop className="absolute w-full h-full object-cover">
          <source src={techVideo} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        {/* Neon Accent Circles */}
        <div className="absolute -bottom-10 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-blue-200/40 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute -top-10 left-8 w-32 h-32 rounded-full bg-gradient-to-br from-indigo-300/30 to-transparent blur-2xl pointer-events-none" />

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-8 max-w-5xl mx-auto gap-4">
          {/* Small Green Label */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm bg-aramcoGreen px-4 py-1 rounded-full mb-3 inline-block shadow-md"
          >
            About ANSpect
          </motion.span>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
          >
            Our Mission
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-4 text-lg md:text-xl text-left text-gray-200 max-w-3xl"
          >
            ANSpect, led by Dr. Ahsan Naim — inventor on 150+ patents — brings research-grade PHY techniques into production-grade software. We push spectrum and hardware to new capacity limits using intelligent PHY algorithms.
          </motion.p>
        </div>
      </section>

      <main className="space-y-24 px-6 md:px-12 lg:px-24 py-16">
        {/* STATS */}
        <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <StatsCard
                title={s.title}
                value={s.value}
                icon={
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                }
              />
            </motion.div>
          ))}
        </section>

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
                  src={opsVideo}
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
              <button className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-500 text-white shadow-lg hover:scale-105 transition">
                View Research
              </button>
              <Link
                to="/#contact"
                className="px-5 py-2 rounded-full border border-gray-200 text-slate-900 hover:bg-blue-50 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl md:text-4xl font-bold">Meet The Team</h2>
            <div className="text-sm text-gray-600">We hire curious domain experts — remotely and globally</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {team.map((m, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02, translateY: -6 }}
                className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-md"
              >
                <div className="absolute -top-8 left-6 w-[72px] h-[72px] rounded-full overflow-hidden shadow-lg ring-2 ring-white">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
                </div>

                <div className="mt-8 pt-2">
                  <h3 className="text-lg font-semibold text-slate-900">{m.name}</h3>
                  <p className="text-sm text-blue-700">{m.role}</p>
                  <p className="text-gray-600 mt-3 text-sm">{m.desc}</p>
                </div>

                <div className="mt-4 flex gap-2">
                  <button className="text-sm px-3 py-1 rounded-full border border-blue-100 text-blue-700">
                    Profile
                  </button>
                  <button className="text-sm px-3 py-1 rounded-full border border-gray-100">Message</button>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* How It Works + LAB */}
        <section id = "phyengine" className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-2xl p-6 bg-white border border-gray-100 shadow-md">
            <h2 className="text-2xl font-bold">How it Works</h2>
            <div className="mt-4 space-y-4">
              {[
                { title: "PHY-Layer Optimization", desc: "Mapping & modulation that cooperates with RF limits." },
                { title: "Simulation & Validation", desc: "From link-level to multi-cell system testbeds." },
                { title: "Deployment", desc: "Drop-in software that integrates with existing stacks." },
              ].map((it, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-400 mt-2 shadow-[0_6px_18px_rgba(59,130,246,0.12)]" />
                  <div>
                    <h4 className="font-semibold text-slate-900">{it.title}</h4>
                    <p className="text-gray-600 text-sm">{it.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-md">
            <VideoCard title="Inside the LAB — testbeds & trials" src={opsVideo} />
          </div>
        </section>

        {/* Results */}
        <section id="results" className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">Results That Matter</h2>
            <div className="text-sm text-gray-600">Measured improvements on real deployments</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { stat: "+45%", title: "Sector Capacity Gain", color: "from-blue-600 to-indigo-400" },
              { stat: "30%", title: "Higher Spectral Efficiency", color: "from-cyan-500 to-blue-600" },
              { stat: "22%", title: "Improved Cell-edge Speeds", color: "from-indigo-500 to-violet-500" },
            ].map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-8 bg-white border border-gray-100 shadow-md relative overflow-hidden`}
              >
                <div className={`absolute -right-8 -top-12 w-56 h-56 rounded-full blur-3xl bg-gradient-to-br ${r.color} opacity-20`} />
                <p className="text-4xl font-extrabold text-slate-900">{r.stat}</p>
                <p className="text-gray-600 mt-2">{r.title}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Stories + Documents */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">Our Stories</h2>
            <div className="w-full">
              {videos.map((v, i) => (
                <VideoCard key={i} title={v.title} src={v.src} />
              ))}
            </div>
          </div>

          <aside className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">Proven on Real 5G Testbeds</h3>
            {documents.map((d, i) => (
              <DocumentCard key={i} title={d.title} description={d.description} />
            ))}
          </aside>
        </section>

        {/* Timeline */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Our History</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {timeline.map((t, i) => (
              <TimelineItem key={i} year={t.year} title={t.title} description={t.description} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mt-8 p-10 rounded-2xl bg-gradient-to-r from-gray-50 to-blue-50 border-gray-100 shadow-md text-center">
          <h3 className="text-2xl font-bold text-shadow-slate-950 mb-2">Join Us on Our Mission</h3>
          <p className="text-gray-900">We build the next generation of high-capacity software-defined networks.</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
