import React from "react";
import Navbar from "../../components/customer/Navbar";
import Footer from "../../components/customer/Footer";
import { Link } from "react-router-dom";

// Heroicons
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
    desc: "AhsanLabs enhances the physical layer with advanced signal processing techniques that unlock hidden efficiency in existing wireless systems — no hardware refresh required."
  },
  {
    id: "constellation",
    icon: ChartBarIcon,
    title: "Optimized Constellation Mapping",
    subtitle: "More data without changing radios.",
    desc: "We embed additional information into unused or low-activity areas of the constellation diagram, improving spectral efficiency while staying fully within RF and EVM limits."
  },
  {
    id: "embedding",
    icon: UsersIcon,
    title: "Multi-User Capacity Boosting",
    subtitle: "Use channel diversity to your advantage.",
    desc: "Our engine intelligently leverages differences in device channel quality to transmit extra data, increasing throughput even when the network is limited by weaker users."
  },
  {
    id: "phy-module",
    icon: PuzzlePieceIcon,
    title: "Drop-In Software PHY Module",
    subtitle: "Integrates with existing network stacks.",
    desc: "A lightweight PHY add-on designed to work alongside existing 4G/5G components — modulation, coding, channel estimation — with minimal integration effort."
  },
  {
    id: "solutions",
    icon: RocketLaunchIcon,
    title: "Capacity Expansion as a Software Upgrade",
    subtitle: "A new value tier for operators.",
    desc: "Enable a “Super Capacity Mode” that instantly increases sector throughput using software. Operators get more performance from the same spectrum and hardware."
  },
  {
    id: "benefits",
    icon: TrophyIcon,
    title: "Operator & Vendor Advantages",
    subtitle: "Higher performance, lower cost-per-bit.",
    desc: "Typical deployments see 40–60% more usable capacity, zero spectrum additions, no RF upgrades, and an easy path to tiered licensing or premium performance plans."
  }
];

export default function Services() {
  return (
    <>
      <Navbar />
      <section className="relative py-16 text-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">Our Services</h2>
            <p className="text-left mt-4 text-gray-200">
              AhsanLabs builds software and firmware that push networks beyond their expected limits — cellular, WiFi, IoT, cable and satellite. We improve spectral efficiency so operators deliver more capacity at a lower cost-per-bit.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <article
                key={s.id}
                className="bg-opacity-70 backdrop-blur-lg rounded-2xl p-6 flex flex-col shadow-lg hover:shadow-2xl transition-shadow duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-none w-14 h-14 bg-gradient-to-br from-aramcoGreen to-green-500 rounded-xl flex items-center justify-center">
                    <s.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    <p className="text-sm text-aramcoGreen mt-1">{s.subtitle}</p>
                  </div>
                </div>

                <p className="mt-4 text-sm text-gray-200 flex-1">{s.desc}</p>


              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
