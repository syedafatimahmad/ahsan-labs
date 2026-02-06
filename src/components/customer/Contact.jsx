import { useState } from "react";
import tech from "../../assets/tech.mp4";
import Button from "../customer/Button";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // success/error message
  const [loading, setLoading] = useState(false); // loading state

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Message sent successfully!");
        setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact" className="w-full">
      {/* Hero Section */}
      <div className="w-full h-[300px] bg-blue-950 flex items-center justify-center relative">
        <video
          src={tech}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <h1 className="text-5xl font-bold text-white relative">Contact Us</h1>
      </div>

      {/* Contact + Form */}
      <div className="container mx-auto px-5 py-16 grid lg:grid-cols-2 gap-10">
        {/* Left Card */}
        <div className="bg-gray-900 text-white p-10 rounded-xl shadow-lg">
          <p className="text-blue-400 mb-2 font-semibold">Contact Us</p>
          <h2 className="text-3xl font-bold mb-4">
            Need More Information?<br />
            Get in Touch
          </h2>
          <p className="text-gray-300 mb-8">
            Reach out for technical discussions, partnership inquiries, or investor relations. 
            We’re happy to schedule a working session and share appropriate non-confidential materials.
          </p>

          <div className="space-y-5">
            <div>
              <p className="text-sm text-gray-400">Phone Number</p>
              <p className="font-medium">+1 (415) 462 4224</p>
            </div>

            <div>
              <p className="text-sm text-gray-400">Email Address</p>
              <p className="font-medium">contact@anspect-technologies.com</p>
            </div>

            <div>
              <p className="text-sm text-gray-400">Office Location</p>
              <p className="font-medium">Suite B206, 4322 N Belt Line Rd, Irving, TX 75038</p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <form onSubmit={handleSubmit} className="bg-white p-10 rounded-xl shadow-lg border">
          <p className="text-blue-600 font-semibold mb-1">Get in touch</p>
          <h2 className="text-3xl font-bold mb-6">Send Message</h2>
          <p className="text-gray-600 mb-6">
            Please fill out the form below with your details and message,
            and our team will get back to you as soon as possible.
          </p>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <input
              type="text"
              name="firstName"
              placeholder="First Name*"
              value={form.firstName}
              onChange={handleChange}
              required
              className="border p-3 rounded-md w-full"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name*"
              value={form.lastName}
              onChange={handleChange}
              required
              className="border p-3 rounded-md w-full"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <input
              type="email"
              name="email"
              placeholder="Email*"
              value={form.email}
              onChange={handleChange}
              required
              className="border p-3 rounded-md w-full"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone*"
              value={form.phone}
              onChange={handleChange}
              required
              className="border p-3 rounded-md w-full"
            />
          </div>

          <textarea
            name="message"
            placeholder="Write Message"
            value={form.message}
            onChange={handleChange}
            required
            className="border p-3 rounded-md w-full h-32 mb-6"
          />

          <Button
            type="submit"
            className={`text-white px-6 py-3 font-semibold ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>

          {status && (
            <p className={`mt-3 text-sm ${status.includes("success") ? "text-green-600" : "text-red-600"}`}>
              {status}
            </p>
          )}
        </form>
      </div>

      {/* Map Section */}
      <div className="w-full h-[400px]">
        <iframe
          title="google-map"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.8995154610825!2d-96.99329272449131!3d32.87437797362308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e820dd88004d5%3A0xf1174569f420157b!2supen%20enterprise!5e0!3m2!1sen!2s!4v1769635141744!5m2!1sen!2s"
        ></iframe>
      </div>
    </div>
  );
}