// CustomerRoutes.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/customer/Home";
import About from "../pages/customer/About";
import Services from "../pages/customer/Services";
import Newsletter from "../pages/customer/Newsletter";
import tech from "../assets/tech.mp4";

export default function CustomerRoutes() {
  return (
    <>
      {/* Persistent Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="fixed top-0 left-0 w-screen h-screen object-cover -z-10"
      >
        <source src={tech} type="video/mp4" />
      </video>

      {/* Content overlay */}
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  );
}
