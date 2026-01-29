// CustomerRoutes.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/customer/Home";
import About from "../pages/customer/About";
import Industries from "../pages/customer/Industries";
import Newsletter from "../pages/customer/Newsletter";
import SearchResults from "../pages/customer/SearchResults";

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
          <Route path="/industries" element={<Industries />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </>
  );
}
