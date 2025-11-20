import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/customer/Home";
import About from "../pages/customer/About";
import Services from "../pages/customer/Services";
import Portfolio from "../pages/customer/Portfolio";
import Newsletter from "../pages/customer/Newsletter";
import tech from "../assets/tech.mp4";

export default function CustomerRoutes() {
  return (
    <>
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed top-0 left-0 w-screen h-screen object-cover -z-10"
      >
        <source src={tech} type="video/mp4" />
      </video>

      {/* Routes content overlay */}
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/newsletter" element={<Newsletter />} />

          {/* Catch-all route redirects to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  );
}
