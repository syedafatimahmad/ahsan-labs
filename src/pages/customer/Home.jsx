import Navbar from "../../components/customer/Navbar";
import Footer from "../../components/customer/Footer";
import Card from "../../components/customer/Card";
import Button from "../../components/customer/Button";

export default function Home() {
  return (
    <>
      <Navbar />
      <header className="bg-blend-hard-light backdrop-blur-sm text-white py-20 md:py-32 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to AhsanLabs</h1>
        <p className="text-base md:text-lg max-w-xl mx-auto mb-6">Innovative solutions in wireless communication and software-driven networks.</p>
        <Button>Learn More</Button>
      </header>

      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card title="Open RAN Solutions" description="Software-defined radio access networks for modern telecom." />
          <Card title="AI Optimized Networks" description="Machine learning algorithms to improve spectral efficiency." />
          <Card title="Firmware Development" description="Optimized firmware for wireless devices." />
        </div>
      </section>

      <section className="bg-white/10 dark:bg-black/20 backdrop-blur-sm py-16">

        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center text-white dark:text-white">Portfolio</h2>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Card title="Project Alpha" description="Next-gen RAN optimization." />
          <Card title="Project Beta" description="AI-driven spectrum allocation." />
          <Card title="Project Gamma" description="Firmware & embedded systems." />
        </div>
      </section>

      <Footer />
    </>
  );
}
