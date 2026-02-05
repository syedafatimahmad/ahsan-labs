import React from "react";
import { motion } from "framer-motion";
import DocumentCard from "../../components/customer/DocumentCard";
import Footer from "../../components/customer/Footer";

export default function Insights() {
  const documents = [
    {
      title: "Why software-defined PHY matters now",
      description: (
        <>
          <p className="mb-4">
            Network demand is growing at a pace that spectrum availability and hardware refresh cycles can no longer match. While past decades relied on new spectrum bands and new radios to drive capacity, today’s networks increasingly face economic, regulatory, and deployment constraints.
          </p>

          <p>
            Software-defined physical-layer innovation represents the next efficiency frontier—unlocking meaningful capacity gains from existing infrastructure without requiring disruptive hardware upgrades. As networks densify and traffic patterns become more heterogeneous, smarter PHY behavior is no longer optional; it is foundational.
          </p>
        </>
      ),
    },
    {
      title: "Rethinking Spectral Efficiency in Modern Networks",
      description: (
        <>
          <p className="mb-4">
            Traditional modulation schemes were designed around worst-case assumptions, leaving usable capacity stranded across large portions of real-world networks. While headline peak-rate metrics continue to improve, average spectral efficiency often lags far behind theoretical limits.
            </p>

          <p>
            This insight explores why conventional approaches underutilize available channel conditions and how more intelligent symbol-level utilization can recover otherwise wasted capacity—without violating existing standards or receiver expectations.
          </p>
        </>
      ),
    },
    {
      title: "Capacity Challenges in Fixed Wireless Access (FWA) Deployments",
      description: (
        <>
          <p className="mb-4">
            FWA networks face a unique convergence of challenges: rapidly growing subscriber counts, highly variable channel conditions, and tight cost constraints. As adoption scales, operators often discover that peak throughput is not the limiting factor—average efficiency and link utilization are.
          </p>

          <p>
            We examine what breaks first as FWA networks mature, why hardware-centric upgrades struggle to keep pace, and where software-based PHY efficiency gains can deliver fast, deployable impact across large portions of the subscriber base.
          </p>
        </>
      ),
    },
    {
      title: "Extending Infrastructure Life Through Smarter Modulation",
      description: (
        <>
          <p className="mb-4">
            Across cellular, cable, and wireless access networks, operators are under pressure to extract more value from existing assets. Full network rebuilds are expensive, time-consuming, and increasingly difficult to justify when incremental gains are possible through intelligence rather than replacement.
          </p>

          <p>
            This perspective outlines how targeted efficiency improvements at the physical layer can extend infrastructure ROI, defer capital expenditures, and improve network economics—without disrupting operational models or installed devices.
          </p>
        </>
      ),
    },
    {
      title: "Looking Ahead",
      description: (
        <>
          <p className="mb-4">
            ANSpect’s Insights will continue to expand with in-depth white papers, technical briefs, and data-driven analyses spanning cellular (3GPP), FWA, cable (DOCSIS), satellite, and emerging access technologies.
          </p>

          <p>
            Our goal is simple: advance the industry conversation around efficiency as a first-class design objective.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        id="insights"
        className="relative w-full h-100 top-3.5 mt-12 flex items-center justify-center text-center px-8"
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
            className="mt-4 md:text-2xl text-gray-700 text-center max-w-6xl mx-auto"
          >
            <p className="mb-4">Thought leadership and technical perspectives from ANSpect Technologies.</p>
            This section features non-confidential analysis and forward-looking viewpoints on network efficiency,
            physical-layer innovation, and the evolving limits of today’s wireless and wireline infrastructure.
            <p>Our insights are designed to inform operators, equipment vendors, and technology partners as networks approach their next scaling boundary.</p>
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
