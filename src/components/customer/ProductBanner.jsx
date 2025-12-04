import React, { useState } from "react";
import logoimage from "../../assets/images/logoimage.png"; // This will be your red waveform
import wire from "../../assets/images/wire.png";
import satellite from "../../assets/images/satellite.png";
import Button from "./Button";

const products = [
  {
    name: "Wire",
    description: "High-quality wire for industrial and electronic applications.",
    img: wire,
  },
  {
    name: "Satellite",
    description: "Advanced satellite system for communication and monitoring.",
    img: satellite,
  },
];

export default function ProductBanner() {
  const [current, setCurrent] = useState(0);

  const nextProduct = () => setCurrent((c) => (c + 1) % products.length);
  const prevProduct = () => setCurrent((c) => (c - 1 + products.length) % products.length);

  return (
    <div className="w-full bg-white py-16 relative overflow-hidden">

      {/* Center Heading */}
      <h2 className="text-3xl font-bold text-center mb-10">
        See Our Latest New Products
      </h2>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row items-center justify-between px-5 relative">

        {/* Left arrow - extreme left of the banner */}
        <button
          onClick={prevProduct}
          className="top-1/2 -translate-y-1/2 text-4xl px-3 py-1 rounded-full hover:bg-gray-200 transition z-10"
          aria-label="Previous product"
        >
          ‹
        </button>

        {/* LEFT — Logo on the left + Overlapping Product */}
        <div className="relative w-full md:w-1/2 flex items-start md:items-center md:justify-start justify-center md:pl-8">
          {/* Big red wave (logoimage) aligned left on md+ */}
          <img
            src={logoimage}
            alt="Wave Background"
            className="w-[320px] md:w-[400px] opacity-90"
          />

          {/* Product image OVERLAPPING to the right of the logo */}
          <img
            src={products[current].img}
            alt={products[current].name}
            className="absolute bottom-0 md:left-[220px] left-1/2 -translate-x-1/2 md:-translate-x-0 w-[260px] md:w-[300px] drop-shadow-xl"
          />
        </div>

        {/* RIGHT — Product Info */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-16">
          <h3 className="text-2xl font-semibold mb-3">
            {products[current].name}
          </h3>

          <p className="text-gray-700 mb-6 leading-relaxed">
            {products[current].description}
          </p>

          <Button className="bg-red-600 text-white px-5 py-3 font-medium rounded hover:bg-red-700 transition">
            Learn More
          </Button>
        </div>

        {/* Right arrow - extreme right of the banner and placed after the explanation in the DOM */}
        <button
          onClick={nextProduct}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-4xl px-3 py-1 rounded-full hover:bg-gray-200 transition z-10"
          aria-label="Next product"
        >
          ›
        </button>
      </div>
    </div>
  );
}