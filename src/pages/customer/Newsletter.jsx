import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/customer/Navbar";
import Footer from "../../components/customer/Footer";
import Button from "../../components/customer/Button";
import tech from "../../assets/tech.mp4";

const categories = [
  {
    title: "Technology",
    desc: "Deep dives into PHY-layer breakthroughs, modulation engines, and ANSpect’s capacity innovations.",
    img: "https://images.unsplash.com/photo-1535223289827-42f1e9919769",
    url: "#",
  },
  {
    title: "Research",
    desc: "Academic collaborations, 5G/6G testbed results, and wireless system research updates.",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    url: "#",
  },
  {
    title: "Company News",
    desc: "Milestones, partnerships, leadership insights, and industry events.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    url: "#",
  },
];

const updates = [
  {
    date: "Feb 2025",
    category: "Technology",
    title:
      "ANSpect achieves 58% average 5G NR throughput gain in outdoor FWA trials",
  },
  {
    date: "Jan 2025",
    category: "Research",
    title:
      "New block-sparse modulation paper accepted for publication with academic partners",
  },
  {
    date: "Dec 2024",
    category: "Company",
    title:
      "ANSpect expands collaboration with Tier-1 RAN vendors for Super Capacity Mode",
  },
];

const faqs = [
  {
    question: "What is ANSpect’s Super Capacity Mode?",
    answer:
      "It is a software-only PHY engine that boosts RAN throughput by 40–60% with no new spectrum or RF hardware.",
  },
  {
    question: "Is the technology compatible with existing 4G/5G stacks?",
    answer:
      "Yes. ANSpect integrates as a drop-in PHY module alongside existing PHY/RLC/MAC components.",
  },
  {
    question: "Do operators need new antennas or radios?",
    answer: "No. All gains come purely from software — no hardware changes.",
  },
  {
    question: "Has the technology been validated?",
    answer:
      "ANSpect has been validated on indoor and outdoor 5G NR testbeds, including multi-user and CQI/MCS evaluations.",
  },
];

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [openFAQ, setOpenFAQ] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with ${email}`);
    setEmail("");
  };

  return (
    <>
      <Navbar />

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
            ANSpect Newsletter
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl text-left font-semibold leading-tight"
          >
            Wireless Capacity Innovation <br/>
            <span className="text-aramcoGreen"> Straight to Your Inbox</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-200 text-left max-w-2xl mt-4 text-lg"
          >
            Get updates on PHY-layer breakthroughs, research collaborations, 
            and behind-the-scenes engineering insights powering the future of wireless.
          </motion.p>
        </div>
      </section>

      {/* News Categories */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-2">News Categories</h2>
        <p className="text-gray-600 mb-8">
          Explore the latest from ANSpect in technology, research, and company developments.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.a
              key={idx}
              href="#"
              className="group relative rounded-2xl overflow-hidden shadow-lg"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={cat.img}
                alt={cat.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
                <h3 className="text-xl font-semibold">{cat.title}</h3>
                <p className="text-sm opacity-90">{cat.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Updates */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4">Latest ANSpect Updates</h2>
          <div className="space-y-3">
            {updates.map((u, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 5 }}
                className="flex flex-col md:flex-row md:items-center justify-between border-b border-gray-300 py-3"
              >
                <span className="text-sm text-gray-500">
                  {u.category} • {u.date}
                </span>
                <span className="text-gray-800 font-medium">{u.title}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center px-6">

          {/* Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Stay Ahead with ANSpect Intelligence
            </h2>

            <p className="text-gray-300 text-lg mb-8">
              Get monthly updates on cutting-edge PHY-layer research, 
              RF breakthroughs, and performance benchmarks — straight 
              from the ANSpect engineering team.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-5 py-3 rounded-xl bg-white text-black flex-1 
                          border border-gray-300 focus:outline-none 
                          focus:ring-2 focus:ring-aramcoGreen shadow-md"
              />


              <Button
                type="submit"
                className="px-8 py-3 bg-aramcoGreen hover:bg-blue-600 text-white rounded-xl font-semibold transition"
              >
                Subscribe
              </Button>
            </form>
          </div>

          {/* Illustration */}
          <div className="flex justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/9896/9896469.png"
              alt="Signal Wave Illustration"
              className="w-3/4 opacity-90 drop-shadow-[0_0_25px_rgba(0,255,150,0.3)]"
            />
          </div>

        </div>
      </section>


      {/* FAQ */}
      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-gray-50 backdrop-blur-md border border-gray-200 shadow-sm hover:shadow-lg transition-shadow"
            >
              <button
                className="w-full flex justify-between items-center px-6 py-5 text-left"
                onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
              >
                <span className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </span>

                {/* Animated Chevron */}
                <svg
                  className={`w-6 h-6 text-gray-600 transform transition-transform duration-300 ${
                    openFAQ === idx ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Smooth dropdown animation */}
              <div
                className={`px-6 text-gray-700 transition-all duration-300 overflow-hidden ${
                  openFAQ === idx ? "max-h-40 pb-5" : "max-h-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </section>


      <Footer />
    </>
  );
}
