import Navbar from "../../components/customer/Navbar";
import Footer from "../../components/customer/Footer";
import { useState } from "react";

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
      <section className="max-w-xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-6">Subscribe to Our Newsletter</h1>
        <p className="mb-6 text-gray-600">Get updates on our latest projects and services.</p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-2 border rounded-md flex-1"
          />
          <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Subscribe
          </button>
        </form>
      </section>
      <Footer />
    </>
  );
}
