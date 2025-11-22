import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/customer/Navbar";
import Footer from "../../components/customer/Footer";

const nokiaNews = [
  {
    title: "Nokia and Netplus deliver advanced IPTV services for enhanced customer experience in India",
    url: "https://www.globenewswire.com/news-release/2025/08/20/3136113/0/en/Nokia-and-Netplus-deliver-advanced-IPTV-services-for-enhanced-customer-experience-in-India.html",
    date: "20 Aug 2025",
    img: "https://i.pinimg.com/1200x/b3/be/3a/b3be3a3d7253c5e0d796574cae5a3391.jpg",
  },
  {
    title: "Nokia and INX‑ZA future‑proof internet connectivity for South Africa’s digital communities",
    url: "https://www.globenewswire.com/news-release/2025/08/21/3136877/0/en/Nokia-and-INX-ZA-future-proof-internet-connectivity-for-South-Africa’s-digital-communities.html",
    date: "21 Aug 2025",
    img: "https://i.pinimg.com/1200x/5c/09/78/5c09785b0db777096eadbf4e354d9a5e.jpg",
  },
  {
    title: "Nokia strengthens AI data center performance and automation",
    url: "https://www.advfn.com/stock-market/EURONEXT/NOKIA/stock-news/97223285/nokia-strengthens-ai-data-center-performance-and-ai-enabled-automation-with-enha",
    date: "13 Nov 2025",
    img: "https://i.pinimg.com/1200x/74/64/a8/7464a80d6f290efe5d0cafb951cadfde.jpg",
  },
];

export default function Newsletter() {
  const [email, setEmail] = useState("");

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
        <p className="mb-10 text-gray-300 text-center text-lg">
          Get the latest updates on our work and Nokia’s tech world — delivered straight to your inbox.
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
          <button
            type="submit"
            className="
              px-6 py-3
              bg-gradient-to-r from-emerald-600 to-emerald-800
              hover:from-emerald-500 hover:to-emerald-700
              text-white
              rounded-lg
              font-semibold
              shadow-lg
              hover:shadow-2xl
              transition-all
              duration-300
              transform
              hover:scale-105">
            Subscribe
          </button>
        </form>

        {/* News List */}
        <h2 className="text-2xl font-bold mb-6 text-center">Latest Nokia News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {nokiaNews.map((news, idx) => (
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
              {/* Image */}
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={news.img}
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Text Overlay */}
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4">
                <h3 className="text-white font-semibold mb-1">{news.title}</h3>
                <span className="text-gray-300 text-sm">{news.date}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
