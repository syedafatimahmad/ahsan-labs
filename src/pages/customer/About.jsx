import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";

import Footer from "../../components/customer/Footer";
import ImageCard from "../../components/customer/ImageCard";
import DocumentCard from "../../components/customer/DocumentCard";

import ansVid from "../../assets/videos/femaleanspect.mp4";
import ahsan from "../../assets/images/ahsan.jpeg";
import techVideo from "../../assets/tech.mp4";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);
  const stats = [
    { title: "Issued US & international patents", value: "150+" },
    { title: "Years in wireless systems design", value: "20+" },
    { title: "Cellular, WiFi, DOCSIS, mmWave", value: "Multi-RAT roadmap" },
    { title: "Across Tier-1 operators & vendors", value: "Experience" },
  ];

  const videos = [
    { title: "Our Mission", src: ansVid },
  ];

  const documents = [
    {
      title: "Why software-defined PHY matters now",
      description:
        "Network load is rising faster than spectrum and hardware refresh cycles. Here's why efficiency is the next frontier.",
    },
    {
      title: "Rethinking spectral efficiency in modern networks",
      description:
        "A high-level look at why traditional modulation leaves capacity unused-and how smarter symbol utilization can help",
    },
    {
      title: "Capacity challenges in FWA deployments",
      description:
        "What breaks first as FWA scales, and where software-based efficiency gains can deliver fast impact",
    },
    {
      title: "Extending infrastructure life through smarter modulation",
      description:
        "How efficiency improvements can extend ROI without requiring disruptive network rebuilds.",
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
      name: "Surya Panditi",
      role: "CEO",
      img: "https://static.vecteezy.com/system/resources/thumbnails/041/641/689/small/3d-character-people-close-up-portrait-smiling-nice-3d-avartar-or-icon-png.png",
      desc: "Leads strategy, partnerships, and commercialization with a track record of scaling companies through global growth and IPO.",
    },
    {
      name: "Dr. Muhammad Ahsan Naim",
      role: "CTO",
      img: "https://static.vecteezy.com/system/resources/thumbnails/041/641/689/small/3d-character-people-close-up-portrait-smiling-nice-3d-avartar-or-icon-png.png",
      desc: "Inventor of BOMA and technical architect of ANSpect’s PHY-layer innovations. Leads research, architecture, and technical roadmap.",
    },
    // {
    //   name: "Daniel Lee",
    //   role: "Senior PHY Developer",
    //   img: "https://static.vecteezy.com/system/resources/thumbnails/041/641/689/small/3d-character-people-close-up-portrait-smiling-nice-3d-avartar-or-icon-png.png",
    //   desc: "Works on SD-PHY modules for 4G/5G and mmWave platforms.",
    // },
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
      <section className="relative w-full h-[50vh] top-3.5 overflow-hidden">
        {/* Background Video */}
        <video autoPlay muted loop className="absolute w-full h-full object-cover">
          <source src={techVideo} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

        {/* Neon Accent Circles */}
        <div className="absolute -bottom-10 right-10 w-40 h-40 rounded-full bg-linear-to-br from-blue-200/40 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute -top-10 left-8 w-32 h-32 rounded-full bg-linear-to-br from-indigo-300/30 to-transparent blur-2xl pointer-events-none" />

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-8 max-w-5xl mx-auto gap-4">
          {/* Small Green Label 
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm bg-aramcoGreen px-4 py-1 rounded-full mb-3 inline-block shadow-md"
          >
            Deep research meets real-world execution—built to translate advanced theory into practical deployment.
          </motion.span>*/}

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
          >
            ANSpect at a Glance
          </motion.h1>

          {/* Paragraph 
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-4 text-lg md:text-xl text-left text-gray-200 max-w-3xl"
          >
            Deep research meets real-world execution—built to translate advanced theory into practical deployment.
          </motion.p>*/}
        </div>

        {/* Scroll Indicator */}
        
      </section>

      <main className="space-y-24 px-6 md:px-12 lg:px-24 py-16">


        {/* Our Story*/}
        <section
          id="ourstory"
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-gradient-to-br from-white to-[#F6FBFF] rounded-3xl p-8 border border-blue-50 shadow-sm"
        >
          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-md">
            <ImageCard title="Dr. Ahsan Naim with Surya Panditi" src={ahsan} />
          </div>
          <div className="rounded-2xl p-6 bg-white border border-gray-100 shadow-md">
            <h2 className="text-2xl font-bold">Origin</h2>
            <div className="mt-4 space-y-4">
              <span className="block">
                <strong>ANSpect</strong> was born at the intersection of deep research and real-world execution.
                The journey began years earlier with <strong>Dr. Ahsan Naim</strong>, whose doctoral research explored the fundamental limits of wireless capacity and spectrum efficiency.
              </span>

              <span className="block">
                That work led to the invention of <strong>BOMA (Building Block Orthogonal Multiple Access)</strong>—unlocking capacity gains in existing networks without requiring new spectrum or disruptive hardware changes.
              </span>

              <span className="block">
                Recognizing the broader potential of the technology, Ahsan refined BOMA through his research company, <strong>AhsanLabs</strong>, with a long-term vision of translating theory into deployable solutions.
              </span>

              {isExpanded && (
                <>
                  <span className="block">
                    Realizing full impact required technical excellence plus experienced leadership and a scalable go-to-market strategy.
                  </span>

                  <span className="block">
                    This led to a partnership with <strong>Surya Panditi</strong>, a seasoned executive with proven track record of building and leading technology companies.
                  </span>

                  <span className="block">
                    Together, they co-founded <strong>ANSpect Technologies</strong>—Ahsan as CTO, Surya as CEO—bridging innovation and commercial deployment.
                  </span>

                  <span className="block">
                    Their complementary backgrounds form the foundation of ANSpect’s approach: deep technical innovation meets executive execution.
                  </span>

                  <span className="block">
                    ANSpect focuses on collaboration between research and industry, theory and practice, enabling higher network efficiency without costly overhauls.
                  </span>
                </>
              )}

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-gray-600 to-gray-800 text-white shadow-lg hover:scale-105 transition"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNOLOGY */}
        <section id="technology" className="space-y-10">
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            <h2 className="text-3xl md:text-4xl font-bold">Technology</h2>
            <p className="text-sm text-gray-600 max-w-xl">
              Layered explanation: clear at the top, deeper as you scroll—without oversharing.
            </p>
          </div>

          {/* Top Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-2xl p-6 bg-linear-to-br from-slate-900 to-slate-800 text-white shadow-lg">
              <span className="inline-block mb-3 px-3 py-1 text-xs rounded-full bg-white/10">
                The Core Idea
              </span>
              <p className="text-sm leading-relaxed text-gray-200">
                Traditional modulation schemes can leave measurable capacity on the table
                due to rigid symbol structures and conservative design assumptions. ANSpect
                rethinks how symbols are constructed, mapped, and utilized—unlocking
                additional capacity within the same spectral footprint.
              </p>
            </div>

            <div className="rounded-2xl p-6 bg-linear-to-br from-indigo-900 to-indigo-800 text-white shadow-lg">
              <span className="inline-block mb-3 px-3 py-1 text-xs rounded-full bg-white/10">
                How It Works (High Level)
              </span>
              <p className="text-sm leading-relaxed text-gray-200">
                ANSpect operates at the PHY layer, enhancing symbol utilization and mapping
                efficiency. The approach is adaptable to channel conditions and can be
                implemented through software or firmware updates, designed to integrate
                into existing modem and baseband architectures.
              </p>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md">
            <div className="grid grid-cols-2 bg-gray-50">
              <div className="p-4 font-semibold">Traditional Approaches</div>
              <div className="p-4 font-semibold text-blue-700">ANSpect</div>
            </div>

            {[
              ["Fixed modulation structures", "Adaptive, intelligent symbol design"],
              ["Spectrum expansion required", "Uses existing spectrum more efficiently"],
              ["Hardware-centric upgrades", "Software-centric deployment path"],
              ["Long upgrade cycles", "Faster time to value"],
            ].map(([left, right], i) => (
              <div key={i} className="grid grid-cols-2 border-t">
                <div className="p-4 text-sm text-gray-700">{left}</div>
                <div className="p-4 text-sm text-gray-900 font-medium">{right}</div>
              </div>
            ))}
          </div>

          {/* Bottom Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-2xl p-6 bg-white border border-gray-100 shadow-md">
              <span className="inline-block mb-3 px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-700">
                Built for Real-World Networks
              </span>
              <p className="text-sm text-gray-600 leading-relaxed">
                Designed with existing standards in mind (e.g., 3GPP, DOCSIS), backward-compatible
                deployment paths, and a focus on operator-grade performance.
              </p>
            </div>

            <div className="rounded-2xl p-6 bg-white border border-gray-100 shadow-md">
              <span className="inline-block mb-3 px-3 py-1 text-xs rounded-full bg-indigo-50 text-indigo-700">
                Intellectual Property & Standards Awareness
              </span>
              <p className="text-sm text-gray-600 leading-relaxed">
                ANSpect’s technology is protected by a strong and growing patent portfolio and
                developed with awareness of established standards frameworks. The goal is not
                to disrupt ecosystems—but to enhance them.
              </p>
            </div>
          </div>
        </section>

        {/* STATS 
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
        </section>*/}

        {/*<div className="w-full">
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
        </section>*/}

        {/* Team */}
        <section id="team" className="space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl md:text-4xl font-bold">Meet The Team</h2>
            <div className="text-sm text-gray-600">Leadership brings together deep technical innovation and proven executive execution.</div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
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

        {/* How It Works + LAB
        <section id="phyengine" className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
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


        </section>*/}

        {/* Insights */}
        <section id="insights" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h2 className="text-3xl font-bold">Insights</h2>
            <p className="text-sm text-gray-600">
              Thought leadership and technical perspectives—non-confidential, credibility-building content.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-10">
            {documents.map((d, index) => (
              <aside key={index} className="space-y-4">
                <DocumentCard
                  title={d.title}
                  description={d.description}
                />
              </aside>
            ))}
          </div>
        </section>


        {/* Timeline 
        <section>
          <h2 className="text-3xl font-bold text-center mb-8">Our History</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {timeline.map((t, i) => (
              <TimelineItem key={i} year={t.year} title={t.title} description={t.description} />
            ))}
          </div>
        </section>*/}


      </main>

      <Footer />
    </div>
  );
} 