import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/customer/Navbar";
import Footer from "../../components/customer/Footer";
import Button from "../../components/customer/Button";

const insights = [
  {
    title: "ANSpect demonstrates 40–60% wireless capacity gains using advanced PHY software",
    url: "#",
    date: "12 Jan 2025",
    img: "https://i.pinimg.com/1200x/b3/be/3a/b3be3a3d7253c5e0d796574cae5a3391.jpg",
  },
  {
    title: "New multi-user embedding technique improves network performance in congested deployments",
    url: "#",
    date: "05 Feb 2025",
    img: "https://i.pinimg.com/1200x/5c/09/78/5c09785b0db777096eadbf4e354d9a5e.jpg",
  },
  {
    title: "ANSpect completes indoor 5G NR testbed validation with significant throughput uplift",
    url: "#",
    date: "28 Feb 2025",
    img: "https://i.pinimg.com/1200x/74/64/a8/7464a80d6f290efe5d0cafb951cadfde.jpg",
  },
];

const faqs = [
  {
    question: "What is ANSpect?",
    answer: "ANSpect is a wireless innovation lab focusing on advanced PHY-layer software, 5G/6G research, and high-capacity wireless solutions.",
  },
  {
    question: "How can I subscribe to the newsletter?",
    answer: "Simply enter your email in the subscription form above and click 'Subscribe'. You will receive updates, news, and insights from ANSpect.",
  },
  {
    question: "Can I access past research and reports?",
    answer: "Yes! Visit our Documentation section to download key research reports, annual reviews, and technical papers.",
  },
  {
    question: "How do I contact ANSpect for collaborations?",
    answer: "Use our Contact Us section or send an email to partnerships@ANSpect.com for research or industry collaboration inquiries.",
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
      

        <section className="max-w-6xl mx-auto px-6 py-16 bg-black/50 backdrop-blur-lg rounded-3xl text-white shadow-xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Subscribe to Our Newsletter</h1>
          <p className="mb-10 text-gray-300 text-center text-lg text-left">
            Stay updated with ANSpect — new research, product updates, wireless technology insights, and engineering breakthroughs delivered straight to your inbox.
          </p>

          {/* Subscription Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full sm:w-auto px-5 py-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-aramcoGreen focus:ring-2 focus:ring-aramcoGreen outline-none transition-all duration-300"
            />
            <Button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r text-white rounded-lg font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Subscribe
            </Button>
          </form>

          {/* News List */}
          <h2 className="text-2xl font-bold mb-6 text-center">Latest AhsanLab News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {insights.map((news, idx) => (
              <motion.a
                key={idx}
                href={news.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex flex-col bg-gray-900 rounded-2xl shadow-lg overflow-hidden group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={news.img}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4">
                  <h3 className="text-white font-semibold mb-1">{news.title}</h3>
                  <span className="text-gray-300 text-sm">{news.date}</span>
                </div>
              </motion.a>
            ))}
          </div>

          {/* FAQ Section */}
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center" id="faq">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-gray-800 bg-opacity-60 rounded-xl shadow-md overflow-hidden">
                <button
                  className="w-full flex justify-between items-center px-6 py-4 text-left text-white font-semibold hover:bg-gray-700 transition"
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                >
                  <span>{faq.question}</span>
                  <span className="text-aramcoGreen font-bold">{openFAQ === idx ? "-" : "+"}</span>
                </button>
                {openFAQ === idx && (
                  <div className="px-6 py-4 text-gray-300 border-t border-gray-700">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      

      <Footer />
    </>
  );
}
