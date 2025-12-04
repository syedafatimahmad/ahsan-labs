// CustomerRoutes.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/customer/Home";
import About from "../pages/customer/About";
import Services from "../pages/customer/Services";
import Newsletter from "../pages/customer/Newsletter";

import ScrollToTop from "../components/customer/ScrollToTop";
import Navbar from "../components/customer/Navbar";


export default function CustomerRoutes() {
  return (
    <>
    <Navbar />
      <div className="relative z-10">
        
        <ScrollToTop />
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
