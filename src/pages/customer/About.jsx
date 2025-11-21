import { motion } from "framer-motion";
import Navbar from "../../components/customer/Navbar";
import Footer from "../../components/customer/Footer";

import StatsCard from "../../components/customer/StatsCard";
import VideoCard from "../../components/customer/VideoCard";
import DocumentCard from "../../components/customer/DocumentCard";
import TimelineItem from "../../components/customer/TimelineItem";

import opsVideo from "../../assets/videos/operations.mp4";
import sustVideo from "../../assets/videos/sustainability.mp4";

// Import PDFs if they are in /src/assets/docs
import annualReport from "../../assets/docs/annual-report-2024.pdf";
import sustainabilityReport from "../../assets/docs/sustainability-2023.pdf";
import financialReport from "../../assets/docs/financial-report-2024.pdf";

export default function About() {
  const stats = [
    { title: "Years of Experience", value: "92" },
    { title: "Total Workforce", value: "75,000+" },
    { title: "Oil Reserves", value: "250 Billion Barrels" },
  ];

  const videos = [
    { title: "Our Operations", src: opsVideo },
    { title: "Sustainability Journey", src: sustVideo },
  ];

  const documents = [
    { title: "Annual Report 2024", file: annualReport },
    { title: "Sustainability Report 2023", file: sustainabilityReport },
    { title: "Financial Report 2024", file: financialReport },
  ];

  const timeline = [
    { year: "1933", title: "The Beginning", description: "Concession signed with SOCAL." },
    { year: "1951", title: "Major Discovery", description: "Safaniyah offshore field discovered." },
    { year: "2000s", title: "Innovation & Transformation", description: "Built R&D centers, POWERS & GigaPOWERS." },
    { year: "Today", title: "Sustainability & Growth", description: "Focused on circular economy & emissions reduction." },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <header className=" text-white py-24 md:py-36 text-center overflow-hidden">
        {/* Optional Hero Background Image */}


        <div className="relative z-10">
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
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8 drop-shadow-sm"
          >
            Energy security for a sustainable world. We create value across the hydrocarbon chain,
            delivering societal and economic benefits globally.
          </motion.p>
        </div>
      </header>

      <main className="space-y-24 font-body text-white">
        {/* Stats Section */}
        <section className="px-4 sm:px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-center mb-10">At a Glance</h2>
          <div className="text-gray-700 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, idx) => (
              <StatsCard key={idx} title={stat.title} value={stat.value} />
            ))}
          </div>
        </section>

        {/* Videos Section */}
        <section className="px-4 sm:px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-center mb-10">Our Stories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {videos.map((vid, idx) => (
              <VideoCard key={idx} title={vid.title} src={vid.src} />
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section className="px-4 sm:px-6 lg:px-20 backdrop-blur-sm bg-black/20">
          <h2 className="text-3xl font-bold mb-8">Our History</h2>
          <div>
            {timeline.map((item, idx) => (
              <TimelineItem
                key={idx}
                year={item.year}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </section>

        {/* Documents Section */}
        <section className="px-4 sm:px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-center mb-10">Key Documents</h2>
          <div className="text-gray-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {documents.map((doc, idx) => (
              <DocumentCard key={idx} title={doc.title} file={doc.file} />
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-black/40 backdrop-blur-md py-12 px-4 sm:px-6 lg:px-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Join Us on Our Journey</h2>
          <p className="text-gray-300">
            Leveraging innovation, sustainability, and operational excellence to shape the future of energy.
          </p>
        </section>
      </main>

      <Footer />
    </>
  );
}
