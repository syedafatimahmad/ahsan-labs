import { motion } from "framer-motion";
import Navbar from "../../components/customer/Navbar";
import Footer from "../../components/customer/Footer";

import StatsCard from "../../components/customer/StatsCard";
import VideoCard from "../../components/customer/VideoCard";
import DocumentCard from "../../components/customer/DocumentCard";
import TimelineItem from "../../components/customer/TimelineItem";

import opsVideo from "../../assets/videos/operations.mp4";
import sustVideo from "../../assets/videos/sustainability.mp4";

import annualReport from "../../assets/docs/annual-report-2024.pdf";
import sustainabilityReport from "../../assets/docs/sustainability-2023.pdf";
import financialReport from "../../assets/docs/financial-report-2024.pdf";

export default function About() {
  const stats = [
    { title: "Wireless Patents", value: "150+" },
    { title: "Years of Engineering Experience", value: "20+" },
    { title: "Research & Industry Partners", value: "30+" },
  ];

  const videos = [
    { title: "Our Operations", src: opsVideo },
    { title: "Sustainability Journey", src: sustVideo },
  ];

  const documents = [
    { title: "AhsanLabs Technology Overview", file: annualReport },
    { title: "5G Testbed Validation Report", file: sustainabilityReport },
    { title: "Wireless Capacity Research Summary", file: financialReport },
  ];

  const timeline = [
    { year: "Early Work", title: "Foundations in Wireless Engineering", description: "Initial research in modulation, channel estimation, and PHY-layer innovation begins, forming the basis for high-capacity wireless systems." },
    { year: "Breakthroughs", title: "Advanced PHY Techniques", description: "Development of block-sparse constellation mapping and cross-user capacity embedding — techniques later validated on real 5G NR testbeds." },
    { year: "Collaboration", title: "Academic & Industry Testbeds", description: "Extensive indoor and outdoor 5G trials conducted with partners to validate throughput gains, scheduler behavior, and cell-edge performance." },
    { year: "Today", title: "Scaling Next-Gen Wireless", description: "AhsanLabs continues advancing PHY-layer software for cellular, WiFi, DOCSIS, and mmWave systems, enabling operators to achieve higher capacity without new hardware." },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <header className="relative text-white py-32 md:py-44 text-center ">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-8 drop-shadow-sm leading-relaxed"
        >
          AhsanLabs is built by wireless innovators — engineers pushing the boundaries of 4G, 5G and future 6G systems with advanced PHY-layer intelligence and real-world research.
        </motion.p>
      </header>

      <main className="space-y-24 font-body text-white">

        {/* Stats Section */}
        <section id="at-a-glance" className="px-4 sm:px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-center mb-10">At a Glance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {stats.map((stat, idx) => (
              <StatsCard key={idx} title={stat.title} value={stat.value} />
            ))}
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="px-4 sm:px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-center mb-10">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Advanced PHY-layer Software",
                description: "We develop high-performance PHY-layer software that improves wireless throughput and efficiency without requiring new hardware."
              },
              {
                title: "Simulation & Testbeds",
                description: "Our solutions are validated through real-world testbeds, simulation, and field trials to ensure maximum performance."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-900 bg-opacity-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <h3 className="text-aramcoGreen font-semibold text-xl mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Section */}
        <section id="technology" className="px-4 sm:px-6 lg:px-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "PHY Engine", description: "Advanced modulation and channel coding for high-speed wireless communication." },
              { title: "Constellation Mapping", description: "Block-sparse mapping techniques to maximize throughput across multiple users." },
              { title: "Capacity Embedding", description: "Cross-user optimization to improve cell-edge performance." }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-900 bg-opacity-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <h3 className="text-aramcoGreen font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership Section */}
        <section id="leadership" className="px-4 sm:px-6 lg:px-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "CEO", description: "Leading strategy and innovation." },
              { title: "CTO", description: "Overseeing engineering and technology." }
            ].map((item, idx) => (
              <div key={idx} className="bg-gray-900 bg-opacity-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <h3 className="text-aramcoGreen font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Research Partners */}
        <section id="research-partners" className="px-4 sm:px-6 lg:px-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Research Partners</h2>
          <div className="bg-gray-900 bg-opacity-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-gray-300 text-center">
            Collaborating with leading universities, research institutions, and industry partners worldwide.
          </div>
        </section>

        {/* Careers */}
        <section id="careers" className="px-4 sm:px-6 lg:px-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Careers</h2>
          <div className="bg-gray-900 bg-opacity-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-gray-300 text-center">
            Join our team of wireless innovators and help shape the future of high-capacity networks.
          </div>
        </section>

        {/* Videos Section */}
        <section id="videos" className="px-4 sm:px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-center mb-10">Our Stories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {videos.map((vid, idx) => (
              <VideoCard key={idx} title={vid.title} src={vid.src} />
            ))}
          </div>
        </section>

        {/* Documents Section */}
        <section id="documentation" className="px-4 sm:px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-center mb-10">Key Documents</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {documents.map((doc, idx) => (
              <DocumentCard key={idx} title={doc.title} file={doc.file} />
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="px-4 sm:px-6 lg:px-20 backdrop-blur-sm bg-black/20 rounded-2xl py-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Our History</h2>
          <div>
            {timeline.map((item, idx) => (
              <TimelineItem key={idx} year={item.year} title={item.title} description={item.description} />
            ))}
          </div>
        </section>

        {/* Call-to-Action */}
        <section className="bg-gradient-to-r from-black/60 via-gray-900/40 to-black/60 backdrop-blur-md py-16 px-4 sm:px-6 lg:px-20 text-center rounded-2xl shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Us on Our Mission</h2>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We combine deep wireless expertise with real-world experimentation to build the next generation of high-capacity software-defined networks.
          </p>
        </section>

      </main>

      <Footer />
    </>
  );
}
