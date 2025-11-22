import React from "react";
import Navbar from "../../components/customer/Navbar";
import Footer from "../../components/customer/Footer";

const services = [
  {
    id: "cellular",
    title: "Cellular Network Optimization",
    subtitle: "Increase capacity and reduce cost-per-bit for mobile operators.",
    desc: "Proprietary firmware and software that boosts spectral efficiency for 4G/5G stacks, improving throughput and user experience without new spectrum.",
  },
  {
    id: "wifi",
    title: "WiFi Capacity & Spectrum Efficiency",
    subtitle: "Get more users per AP without ripping out hardware.",
    desc: "Advanced PHY/MAC optimisations and adaptive scheduling for congested WiFi deployments — better range, lower retransmits, and higher real-world speeds.",
  },
  {
    id: "iot",
    title: "IoT Connectivity & Firmware",
    subtitle: "Reliable, low-power connectivity for massive IoT fleets.",
    desc: "Custom lightweight stacks, OTA firmware management and adaptive radios that extend battery life while increasing device density on a single gateway.",
  },
  {
    id: "cable",
    title: "Cable & Edge Networking",
    subtitle: "Make existing cable infrastructure carry more traffic.",
    desc: "Software-defined optimisations and edge-aware QoS that squeeze extra capacity from DOCSIS, HFC and hybrid networks with minimal hardware changes.",
  },
  {
    id: "satellite",
    title: "Satellite Link Acceleration",
    subtitle: "Expensive satellite bits? Stretch them further.",
    desc: "Custom link-layer improvements, adaptive coding and latency-aware transport to maximise throughput over GEO/LEO links while keeping jitter and packet loss in check.",
  },
  {
    id: "integration",
    title: "Integration & Managed Services",
    subtitle: "From lab to live — we own the deployment.",
    desc: "Proof-of-concept, integration with existing OSS/BSS, operator trials, and managed deployment so your ops team can sleep at night.",
  },
];

export default function Services() {
  return (
    <>
      <Navbar />

      <section className="relative py-16 text-gray-100">

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
              Our Services
            </h2>
            <p className="mt-4 text-gray-200">
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
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3zM20 21v-2a4 4 0 00-4-4h-1M8 21v-2a4 4 0 014-4h1" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{s.title}</h3>
                    <p className="text-sm text-aramcoGreen mt-1">{s.subtitle}</p>
                  </div>
                </div>

                <p className="mt-4 text-sm text-gray-200 flex-1">{s.desc}</p>

                <div className="mt-6 flex items-center justify-between">
                  <a
                    href={`/#services-${s.id}`}
                    className="inline-flex items-center gap-2 text-sm font-medium px-3 py-2 rounded-lg bg-aramcoGreen bg-opacity-90 hover:bg-opacity-100"
                  >
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0L18 9.586a1 1 0 010 1.414l-4.293 4.293a1 1 0 01-1.414-1.414L14.586 11H4a1 1 0 110-2h10.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>

                  <a href={`mailto:sales@ahsanalabs.com?subject=Service%20Inquiry%20-%20${encodeURIComponent(s.title)}`} className="text-xs text-gray-300 hover:text-gray-100">
                    Contact sales
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-300 max-w-2xl mx-auto">
              Want us to run a trial on your live network or integrate with your OSS/BSS? We do operator POCs, field trials and custom integration — minimal disruption, measurable gains.
            </p>
            <div className="mt-6 inline-flex gap-3">
              <a href="/contact" className="px-6 py-3 rounded-full bg-aramcoGreen font-semibold">
                Start a POC
              </a>
              <a href="/docs/whitepaper.pdf" className="px-6 py-3 rounded-full border border-gray-700 text-sm">
                Read our whitepaper
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}