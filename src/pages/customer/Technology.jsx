import React from "react";
import { motion } from "framer-motion";
import Footer from "../../components/customer/Footer";
import tech from "../../assets/tech.mp4";

export default function Technology() {
    return (
        <>
            {/* TECHNOLOGY */}
            <section id="technology" className="relative w-full h-80 top-8 flex items-center bg-blue-950 justify-center text-center px-8">
                {/* Background Video */}
                      <video
                        src={tech}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-40"
                      />

                <div className="max-w-3xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10 text-6xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white"
                    >
                        Technology
                    </motion.h1>
                </div>
            </section>

            <section className="w-full mx-auto px-4 sm:px-6 lg:px-8 mt-15 space-y-12">

                {/* Top Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="rounded-2xl p-6 bg-linear-to-br from-slate-900 to-slate-800 text-white shadow-lg">
                        <span className="inline-block mb-3 px-3 py-1 text-xs rounded-full bg-white/10">
                            The Core Idea
                        </span>
                        <p className="text-lg leading-relaxed text-gray-200">
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
                        <p className="text-lg leading-relaxed text-gray-200">
                            ANSpect operates at the PHY layer, enhancing symbol utilization and mapping
                            efficiency. The approach is adaptable to channel conditions and can be
                            implemented through software or firmware updates, designed to integrate
                            into existing modem and baseband architectures.
                        </p>
                    </div>
                </div>

                {/* Comparison Table */}
                <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-md">
                    <div className="grid grid-cols-2 text-lg bg-gray-50">
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
                            <div className="p-4 text-lg text-gray-700">{left}</div>
                            <div className="p-4 text-lg text-gray-900 font-medium">{right}</div>
                        </div>
                    ))}
                </div>

                {/* Bottom Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

  {/* Card 1 */}
  <div className="rounded-2xl p-6 bg-white border border-gray-100 shadow-md">
    <div className="flex items-start justify-between gap-4">
      
      <div>
        <span className="inline-block mb-3 px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-700">
          Built for Real-World Networks
        </span>

        <p className="text-lg text-gray-600 leading-relaxed">
          Designed with existing standards in mind (e.g., 3GPP, DOCSIS), backward-compatible
          deployment paths, and a focus on operator-grade performance.
        </p>
      </div>

      <img
        src="./network.png"
        alt="Network"
        className="w-12 h-12 shrink-0"
      />
    </div>
  </div>

  {/* Card 2 */}
  <div className="rounded-2xl p-6 bg-white border border-gray-100 shadow-md">
    <div className="flex items-start justify-between gap-4">
      
      <div>
        <span className="inline-block mb-3 px-3 py-1 text-xs rounded-full bg-indigo-50 text-indigo-700">
          Intellectual Property & Standards Awareness
        </span>

        <p className="text-lg text-gray-600 leading-relaxed">
          ANSpect’s technology is protected by a strong and growing patent portfolio and
          developed with awareness of established standards frameworks. Our goal is not
          to disrupt ecosystems—but to enhance them.
        </p>
      </div>

      <img
        src="./ipp.png"
        alt="IP"
        className="w-12 h-12 shrink-0"
      />
    </div>
  </div>

</div>



            </section>
            <Footer />
        </>
    );
}
