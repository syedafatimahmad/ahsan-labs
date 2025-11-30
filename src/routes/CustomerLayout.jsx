import React from "react";
import TechBackground from "../components/customer/TechBackground";
import Navbar from "../components/customer/Navbar";

import CustomerRoutes from "./CustomerRoutes";

/**
 * CustomerLayout - mounts TechBackground behind the UI and renders Navbar + pages + Footer
 */
export default function CustomerLayout() {
  return (
    <>
      {/* Background (non-interactive by default) */}
      <TechBackground nodeCount={400} connectionDistance={0.33} />

      {/* Foreground UI */}
      <div className="relative z-10 min-h-screen">
        <Navbar />

        {/* main content gets top padding so fixed navbar doesn't overlap */}
        <main className="pt-20">
          <CustomerRoutes />
        </main>


      </div>
    </>
  );
}