import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import Button from "../../components/customer/Button";

import Footer from "../../components/customer/Footer";
import ImageCard from "../../components/customer/ImageCard";
import tech from "../../assets/tech.mp4";

import ahsan from "../../assets/images/ahsan.jpeg";
// import techVideo from "../../assets/tech.mp4";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

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



  const team = [
    {
      name: "Surya Panditi",
      role: "Co-Founder & Chief Executive Officer",
      img: "./1.jpeg",
      desc: "Senior executive with successful start-up to large company experience. Career highlights include successfully managing a $4B business for profitability and growing a business from zero to a $100M run rate, followed by a successful IPO. Strong track record of operational excellence, business growth and profitability, inspirational leadership, customer engagement, product development and thought leadership.",
    },
    {
      name: "Dr. Ahsan Naim",
      role: "Co-Founder & Chief Technology Officer",
      img: "./2.jpeg",
      desc: (
        <>
          Dr. Ahsan Naim obtained his MS and PhD in Electrical Engineering in 2007 and 2014 from The University of Texas at Dallas.
          He co-founded the startup{" "}
          <a href="https://www.welink.com/" target="_blank" rel="noopener noreferrer">
            <strong>WeLink</strong>
          </a>{" "}
          in 2018 that has raised $200M+ to date. He is a domain expert with 15+ years of industry experience working for tier-1 wireless equipment vendor Ericsson, tier-1 network operator Sprint (Now T-Mobile), and regional wireless internet service providers (Vivint Wireless & WeLink). He is an inventor of 150+ issued US and International patents, multiple research publications, and received several business awards.
        </>
      )
    },
    {
      name: "John Chapman",
      role: "Senior Vice President, Chief Strategy Officer, Cable",
      img: "./4.jpeg",
      desc: "John is the former CTO Broadband and Fellow at Cisco. With over 130 patents and 50 published papers, John is a prolific inventor, a primary author of DOCSIS, and the inventor of HSSI and Remote PHY. John was inducted into the Cable TV Pioneer society in 2015 and into the SCTE Hall of Fame in 2012.",
    },
    {
      name: "Luca Martini",
      role: "Senior Vice President Systems Engineering",
      img: "./6.jpeg",
      desc: "Senior leader with extensive experience in large-scale distributed systems and platform services. Known for creating industry-leading technology solutions that scale to millions of users, while maintaining engineering excellence and cross-functional collaboration. Proven track record of leading globally distributed engineering teams and delivering customer-facing platforms that drive business results.  Revolutionized Layer 2 Virtual Private Network (VPN) market by invention of “draft-martini” technology.",
    },
    {
      name: "Dave Island",
      role: "Senior Vice President Sales",
      img: "./33.jpeg",
      desc: "Dave has over three decades of sales leadership experience specializing in complex networking products and technologies. Before Ketsen, he led sales organizations at Cambium Networks, Radware, Avaya and Alcatel-Lucent (now Nokia) among others. During his time at Cambium, Dave was responsible for over $50 million in revenue, secured the company’s first Tier 1 PTP backhaul business with Sprint/T-Mobile and drove 15% year-over-year growth four years in a row. Throughout his career, Dave has managed major sales accounts, including Google, Cisco, Intel, AT&T and Verizon. He is a proud alumnus of the U.S. Naval Academy. Go Navy!",
    },
    {
      name: "Salman Farooqui",
      role: "Vice President of Engineering",
      img: "./7.jpeg",
      desc: "Embedded Engineer with 15+ years of experience in software and firmware development for diverse electronic devices, including medical equipment, mobile devices, security systems, printers, and consumer products. Skilled in real-time embedded environments (RTOS), full Software Development Life-Cycle (SDLC), hardware design, troubleshooting, and cross-functional collaboration with R&D, manufacturing, marketing, and QA teams.",
    },
    {
      name: "Fahim Bashar",
      role: "Layer 1 Software Engineer",
      img: "./34.jpeg",
      desc: "Fahim Bashar is a wireless systems engineer specializing in 5G, Open RAN, and software-defined radio platforms, with hands-on experience developing and validating advanced wireless technologies in over-the-air testbeds. At ANSpect, he focuses on the implementation, integration, and experimental validation of ANSpect’s technology on 5G platforms, helping translate innovative wireless concepts into practical, deployable solutions.",
    },
    {
      name: "Kariem Zakaria",
      role: "Head of Business Development, MEA",
      img: "./35.jpeg",
      desc: "Kariem Zakaria is an accomplished telecommunications and business development leader with more than 25 years of experience introducing transformational technologies across the Middle East and Africa. At ANSpect, he leads business development across the MEA region, leveraging his deep experience with telecom operators, technology vendors, regulators, and strategic partners to drive customer engagement and commercial adoption of ANSpect’s technology.",
    },
    {
      name: "Daniel Etman",
      role: "Head of Business Development, Europe",
      img: "./36.jpeg",
      desc: "Daniel Etman is an experienced sales and business development leader with a strong background in the technology sector, including roles at Cisco and other leading organizations. At ANSpect, he leads business development in Europe, focused on building strategic partnerships, strengthening customer relationships, and driving the commercial adoption of ANSpect’s technology across the region.",
    },
    {
      name: "John Fonseka",
      role: "Advisor",
      img: "./5.jpeg",
      desc: "Dr. John Fonseka obtained his MS in Electrical Engineering from Memorial University of Newfoundland, Canada in 1985 and PhD in Electrical Engineering from Arizona State University in 1988. He is an author of 80+ journal research publications and multiple issued US patents. He is currently a Professor of Electrical Engineering at The University of Texas at Dallas.",
    },
    {
      name: "Ken Klaer",
      role: "Advisor",
      img: "./37.jpeg",
      desc: "Ken Klaer is a veteran cable and technology executive who retired from Comcast after more than 11 years, most recently serving as Executive Vice President and President of Comcast Technology Solutions. His career also includes leadership roles supporting the cable industry at Scientific-Atlanta, Antec/ARRIS, and Cisco Systems, and he was inducted into the Cable TV Pioneers in 2015. Ken currently serves as President and Chair of the SCTE Foundation and on the Georgia Tech College of Engineering Advisory Board, and was recognized with Georgia Tech’s Academy of Distinguished Engineering Alumni Award in 2025. He also serves on the board of Georgia FIRST Robotics.",
    },
    {
      name: "Sandy Howe",
      role: "Advisor",
      img: "./38.jpeg",
      desc: "Sandy Howe is a seasoned technology executive and board director with more than 25 years of leadership experience across broadband, wireless, 5G, cybersecurity, and digital infrastructure. A former C-level executive and current board director, she brings deep expertise in scaling technology businesses, strategic transformation, and connecting innovators with industry leaders, investors, and partners.",
    },
    {
      name: "Chetan Sharma",
      role: "Advisor",
      img: "./39.jpeg",
      desc: "Chetan Sharma is a recognized wireless industry strategist and advisor with extensive experience in mobile technologies, product strategy, intellectual property, and emerging wireless business models. He has advised senior executives at leading global technology and telecommunications companies, including NTT DoCoMo, AT&T, Sprint Nextel, Qualcomm, SAP, HP, and others, as well as major financial institutions and U.S. government agencies. Chetan serves on the advisory boards of several technology companies and is a trusted advisor to CEOs and CTOs on wireless innovation, product strategy, and IP development. He holds an M.S. in Electrical Engineering from Kansas State University and a B.E. from the Indian Institute of Technology Roorkee.",
    },
    {
      name: "William (Bill) McCarthy",
      role: "Advisor",
      img: "./40.jpeg",
      desc: "Bill McCarthy is a seasoned technology executive with extensive leadership experience across networking, telecommunications, and enterprise technology. He previously served as Chief Revenue Officer at Infoblox and held senior leadership roles at Cisco, where he led major service provider and digital-content businesses, bringing deep expertise in scaling technology companies, go-to-market strategy, and global customer engagement.",
    },
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
  <div className="min-h-screen text-slate-900 antialiased font-body">
    {/* HERO */}
    <section className="relative w-full h-[40vh] top-3.5 flex bg-blue-950 items-center justify-center overflow-hidden">

      {/* Background Video */}
      <video
        src={tech}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-10 max-w-5xl mx-auto gap-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
        >
          Team
        </motion.h1>
      </div>

   



        {/* Scroll Indicator */ }
        
      </section >

      <main className="space-y-24 px-6 md:px-12 lg:px-24">


        {/* Our Story*/}
        <section
          id="ourstory"
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-gradient-to-br from-white to-[#F6FBFF]  p-8 border border-blue-50 shadow-sm"
        >
          <div className=" overflow-hidden border rounded-2xl border-gray-100 shadow-md">
            <ImageCard title="Dr. Ahsan Naim with Surya Panditi" src={ahsan} />
          </div>
          <div className=" p-6 bg-white border border-gray-100 shadow-md">
            <h2 className="text-4xl text-center text-blue-900 font-bold">Our Story</h2>
            <div className="mt-4 space-y-4">
              <span className="block">
                <strong>ANSpect</strong> was born at the intersection of deep research and real-world execution.</span>
                
                <span className="block">
                The journey began years earlier with <strong>Dr. Ahsan Naim</strong>, whose doctoral research explored the fundamental limits of wireless capacity and spectrum efficiency.
              </span>

              <span className="block">
                That work led to the invention of <strong>O-EMA (Orthogonal - Enhanced Multiple Access)</strong>—a breakthrough approach designed to unlock significant capacity gains in existing networks without requiring new spectrum or disruptive hardware changes.
              </span>

              <span className="block">
                Recognizing the broader potential of the technology, Ahsan continued to refine and expand O-EMA through his research company, <strong><a href="https://ahsanlabs.net" target="_blank" rel="noopener noreferrer">AhsanLabs</a></strong>, with a long-term vision of translating advanced theory into deployable, operator-grade solutions.

              </span>

              {isExpanded && (
                <>
                  <span className="block">
                    As the technology matured, it became clear that realizing its full impact would require more than technical excellence alone. It would need experienced leadership, a strong go-to-market strategy, and the ability to scale across global telecom ecosystems. That realization led to a partnership with
                     <strong> Surya Panditi</strong>, a seasoned executive with a proven track record of building and leading technology companies—from early growth stages through large-scale commercialization, including successfully guiding a company to IPO.
                  </span>

                  <span className="block">
                    Together, Ahsan and Surya  co-founded <strong>ANSpect Technologies</strong> to bridge the gap between cutting-edge wireless innovation and commercial deployment. Today, 
                    <strong> Surya serves as CEO</strong>, leading strategy, partnerships, and market execution, while <strong>Ahsan serves as CTO</strong>, 
                    driving the technical vision, architecture, and continued evolution of the core technology. Their complementary backgrounds—one rooted in deep technical innovation, the other in executive leadership and commercialization—form the foundation of ANSpect’s approach.
                  </span>

                  <span className="block">
                    ANSpect’s story is ultimately about collaboration: between research and industry, theory and practice, innovation and execution. It reflects a shared belief that transformative advances in connectivity don’t always require rebuilding networks from scratch—but rather, rethinking how intelligently we use what already exists.
                  </span>
                </>
              )}

              <div className="mt-6 flex gap-3">
                <Button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="inline-flex items-center gap-2 px-5 py-2 text-white shadow-lg hover:scale-105 transition"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </Button>
              </div>
            </div>
          </div>
        </section>

        


        {/* Team */}
<section id="team" className="space-y-8">
  <div className="flex items-center justify-between">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-5">
      Meet The Team
    </h2>
  </div>

  <div className="space-y-12">
    {/* Main Team */}
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {team.slice(0, 7).map((m, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02, translateY: -6 }}
            className="relative bg-white p-6 border border-gray-100 mt-5 shadow-md"
          >
            <div className="absolute -top-8 left-6 w-28 h-28 overflow-hidden shadow-lg ring-2 ring-white">
              <img
                src={m.img}
                alt={m.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-8 pt-12">
              <h3 className="text-lg font-semibold text-slate-900">
                {m.name}
              </h3>
              <p className="text-sm text-blue-700">{m.role}</p>
              <p className="text-gray-600 mt-3 text-sm">{m.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Business Development */}
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8">
        Business Development
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {team.slice(7, 9).map((m, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02, translateY: -6 }}
            className="relative bg-white p-6 border border-gray-100 mt-5 shadow-md"
          >
            <div className="absolute -top-8 left-6 w-28 h-28 overflow-hidden shadow-lg ring-2 ring-white">
              <img
                src={m.img}
                alt={m.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-8 pt-12">
              <h3 className="text-lg font-semibold text-slate-900">
                {m.name}
              </h3>
              <p className="text-sm text-blue-700">{m.role}</p>
              <p className="text-gray-600 mt-3 text-sm">{m.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Advisors */}
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-8">
        Advisor
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        {team.slice(9).map((m, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02, translateY: -6 }}
            className="relative bg-white p-6 border border-gray-100 mt-5 shadow-md"
          >
            <div className="absolute -top-8 left-6 w-28 h-28 overflow-hidden shadow-lg ring-2 ring-white">
              <img
                src={m.img}
                alt={m.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-8 pt-12">
              <h3 className="text-lg font-semibold text-slate-900">
                {m.name}
              </h3>
              <p className="text-sm text-blue-700">{m.role}</p>
              <p className="text-gray-600 mt-3 text-sm">{m.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>


      </main>

      <Footer />
    </div >
  );
} 