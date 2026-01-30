import React from "react";
import { motion } from "framer-motion";
import DocumentCard from "../../components/customer/DocumentCard";
import Footer from "../../components/customer/Footer";

export default function Insights() {
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

  return (
    <>
      {/* Hero Section */}
      <section
        id="insights"
        className="relative w-full h-100 top-3.5 flex items-center justify-center text-center px-8"
      >
        <div className="w-full">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-blue-900"
          >
            INSIGHTS
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-4 md:text-2xl text-gray-700 whitespace-nowrap text-center"
          >
            Thought leadership and technical perspectives—non-confidential, credibility-building content.
          </motion.p>
        </div>
      </section>

      {/* Documents Section */}
      <section className=" px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {documents.map((d, index) => (
            <aside key={index} className="space-y-4">
              <DocumentCard title={d.title} description={d.description} />
            </aside>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
