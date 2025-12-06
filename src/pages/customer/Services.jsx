import React from "react";
import Footer from "../../components/customer/Footer";
import tech from "../../assets/tech.mp4";
import { motion } from "framer-motion";

import {
  CpuChipIcon,
  ChartBarIcon,
  UsersIcon,
  PuzzlePieceIcon,
  RocketLaunchIcon,
  TrophyIcon
} from "@heroicons/react/24/outline";

const services = [
  {
    id: "technology",
    icon: CpuChipIcon,
    title: "Advanced PHY-Layer Intelligence",
    subtitle: "Smarter modulation, higher capacity.",
    desc: "ANSpect enhances the physical layer with advanced signal processing techniques that unlock hidden efficiency in existing wireless systems — no hardware refresh required."
  },
  {
    id: "constellation",
    icon: ChartBarIcon,
    title: "Optimized Constellation Mapping",
    subtitle: "More data without changing radios.",
    desc: "We embed additional information into unused regions of the constellation diagram, improving spectral efficiency while staying within RF and EVM limits."
  },
  {
    id: "embedding",
    icon: UsersIcon,
    title: "Multi-User Capacity Boosting",
    subtitle: "Use channel diversity to your advantage.",
    desc: "The engine leverages channel quality variations between devices to transmit extra data, increasing throughput even under weakest-user limitations."
  },
  {
    id: "phy-module",
    icon: PuzzlePieceIcon,
    title: "Drop-In Software PHY Module",
    subtitle: "Integrates with existing network stacks.",
    desc: "A lightweight PHY add-on designed to work alongside existing 4G/5G components — modulation, coding, estimation — with minimal integration effort."
  },
  {
    id: "solutions",
    icon: RocketLaunchIcon,
    title: "Capacity Expansion via Software",
    subtitle: "A new value tier for operators.",
    desc: "Unlock a “Super Capacity Mode” that instantly increases sector throughput using software. No spectrum additions or RF upgrades needed."
  },
  {
    id: "benefits",
    icon: TrophyIcon,
    title: "Operator & Vendor Advantages",
    subtitle: "Higher performance, lower cost-per-bit.",
    desc: "Deployments commonly see 40–60% more usable capacity, zero spectrum additions, and new opportunities for tiered licensing."
  }
];

export default function Services() {
  return (
    <>
      {/* TOP SECTION */}
      
          {/* Hero */}
          <section className="relative w-full h-[520px] overflow-hidden">
            <video autoPlay muted loop className="absolute w-full h-full object-cover">
              <source src={tech} type="video/mp4" />
            </video>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-8">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm bg-aramcoGreen px-4 py-1 rounded-full mb-3 inline-block"
              >
                What We Offer
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
              >
                Our Services <br/>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.8 }}
                className="mt-4 text-lg md:text-xl text-left text-gray-200 max-w-3xl"
              >
                ANSpect builds software and firmware that push networks beyond
              their expected limits — WiFi, Cellular, IoT, satellite or cable.
              We unlock spectral efficiency so operators deliver more capacity at
              a lower cost-per-bit.

              </motion.p>
            </div>
          </section>
          

          {/* GRID SECTION */}
          <div className="p-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <article
                key={s.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100"
              >
                {/* ICON */}
                <div className="w-16 h-16 bg-blue-600/10 rounded-2xl flex items-center justify-center mb-6">
                  <s.icon className="w-9 h-9 text-blue-700" />
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-semibold text-gray-900">
                  {s.title}
                </h3>

                <p className="text-blue-700 font-medium mt-1 text-sm">
                  {s.subtitle}
                </p>

                {/* DESCRIPTION */}
                <p className="mt-4 text-gray-600 leading-relaxed text-sm">
                  {s.desc}
                </p>
              </article>
            ))}
          </div>
       
   

      <Footer />
    </>
  );
}
