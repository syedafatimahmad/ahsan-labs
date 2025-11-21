import { useState } from "react";
import Navbar from "../../components/customer/Navbar";
import Footer from "../../components/customer/Footer";

const nokiaNews = [
  {
    title: "Nokia and Netplus deliver advanced IPTV services for enhanced customer experience in India",
    url: "https://www.globenewswire.com/news-release/2025/08/20/3136113/0/en/Nokia-and-Netplus-deliver-advanced-IPTV-services-for-enhanced-customer-experience-in-India.html",
    date: "20 Aug 2025",
  },
  {
    title: "Nokia and INX‑ZA future‑proof internet connectivity for South Africa’s digital communities",
    url: "https://www.globenewswire.com/news-release/2025/08/21/3136877/0/en/Nokia-and-INX-ZA-future-proof-internet-connectivity-for-South-Africa’s-digital-communities.html",
    date: "21 Aug 2025",
  },
  {
    title: "Nokia strengthens AI data center performance and automation",
    url: "https://www.advfn.com/stock-market/EURONEXT/NOKIA/stock-news/97223285/nokia-strengthens-ai-data-center-performance-and-ai-enabled-automation-with-enha",
    date: "13 Nov 2025",
  },
];

export default function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // In real app, you’d send this to your backend or mailing API
    alert(`Subscribed with ${email}`);
    setEmail("");
  };

  return (
    <>
      <Navbar />

      <section className="max-w-4xl mx-auto px-6 py-16 bg-black/50 backdrop-blur-md rounded-lg text-white">
        <h1 className="text--3xl md:text-4xl font-semibold mb-4 text-center">Subscribe to Our Newsletter</h1>
        <p className="mb-8 text-gray-200 text-center">
          Get the latest updates on our work AND news from Nokia’s tech world.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-2 border border-transparent rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-800 text-white"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition"
          >
            Subscribe
          </button>
        </form>

        <div>
          <h2 className="text-2xl font-bold mb-4">Latest Nokia News</h2>
          <ul className="space-y-3">
            {nokiaNews.map((news, idx) => (
              <li key={idx}>
                <a
                  href={news.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-200 hover:text-indigo-400"
                >
                  {news.title}
                </a>
                <div className="text-sm text-gray-400">{news.date}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </>
  );
}
