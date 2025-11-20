import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/customer/Home";
import About from "../pages/customer/About";
import Services from "../pages/customer/Services";
import Portfolio from "../pages/customer/Portfolio";
import Newsletter from "../pages/customer/Newsletter";

export default function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/newsletter" element={<Newsletter />} />

      {/* Catch-all route redirects to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
