import { useState } from "react";
import tech from "../../assets/tech.mp4";
import Button from "../customer/Button"

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <div id = "contact" className="w-full">

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
        <h1 className="text-4xl font-bold text-white relative">Contact Us</h1>
      </div>

      {/* Contact + Form */}
      <div className="container mx-auto px-5 py-16 grid lg:grid-cols-2 gap-10">

        {/* Left Card */}
        <div className="bg-gray-900 text-white p-10 rounded-xl shadow-lg">
          <p className="text-blue-400 mb-2 font-semibold">Contact Us</p>
          <h2 className="text-3xl font-bold mb-4">Need More Information?<br />Get in Touch</h2>
          <p className="text-gray-300 mb-8">
            Contact us today for tailored marketing strategies and expert advice.
            We’re eager to help your business grow!
          </p>

          <div className="space-y-5">
            <div>
              <p className="text-sm text-gray-400">Phone Number</p>
              <p className="font-medium">+1 (123) 456 7890</p>
            </div>

            <div>
              <p className="text-sm text-gray-400">Email Address</p>
              <p className="font-medium">info@example.com</p>
            </div>

            <div>
              <p className="text-sm text-gray-400">Office Location</p>
              <p className="font-medium">7164 Barton Terrace, North Penlake, Vermont - 97879, USA</p>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-10 rounded-xl shadow-lg border"
        >
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
              onChange={handleChange}
              className="border p-3 rounded-md w-full"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name*"
              onChange={handleChange}
              className="border p-3 rounded-md w-full"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <input
              type="email"
              name="email"
              placeholder="Email*"
              onChange={handleChange}
              className="border p-3 rounded-md w-full"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone*"
              onChange={handleChange}
              className="border p-3 rounded-md w-full"
            />
          </div>

          <textarea
            name="message"
            placeholder="Write Message"
            onChange={handleChange}
            className="border p-3 rounded-md w-full h-32 mb-6"
          />

          <Button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md font-semibold"
          >
            Send Message
          </Button>
        </form>
      </div>

      {/* Trusted Companies 
      <div className="py-12 bg-gray-50">
        <div className="container mx-auto px-5">
          <p className="text-center text-gray-600 font-medium mb-6">
            Trusted by 50+ top companies
          </p>

          <div className="flex flex-wrap justify-center gap-10 opacity-70">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="w-32 h-10 bg-gray-300 rounded-md animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>*/}

      {/* Map Section */}
      <div className="w-full h-[400px]">
        <iframe
          title="google-map"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19825.077328253568!2d-0.12574!3d51.50853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCqDMwJzMwLjciTiAwwrAwNyc0NS4zIlc!5e0!3m2!1sen!2sus!4v1700000000000"
        ></iframe>
      </div>
    </div>
  );
}
