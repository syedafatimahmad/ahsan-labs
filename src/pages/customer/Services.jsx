import React from "react";
import Footer from "../../components/customer/Footer";
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
      <section className="relative py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6 lg:px-12">

          {/* HEADER */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h4 className="text-blue-600 font-semibold tracking-wide uppercase">
              What We Offer
            </h4>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">
              Our Services
            </h2>

            <p className="mt-5 text-gray-600 leading-relaxed text-lg">
              AhsanLabs builds software and firmware that push networks beyond
              their expected limits — WiFi, Cellular, IoT, satellite or cable.
              We unlock spectral efficiency so operators deliver more capacity at
              a lower cost-per-bit.
            </p>
          </div>

          {/* GRID SECTION */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </section>

      <Footer />
    </>
  );
}
