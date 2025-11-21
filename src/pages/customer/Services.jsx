import Navbar from "../../components/customer/Navbar";
import Footer from "../../components/customer/Footer";
import Card from "../../components/customer/Card";

export default function Services() {
  const services = [
    { title: "Open RAN Solutions", description: "Software-defined RAN for telecom." },
    { title: "AI Optimized Networks", description: "Machine learning for spectral efficiency." },
    { title: "Firmware Development", description: "Embedded firmware solutions." },
  ];

  return (
    <>
      <Navbar />
      <section className="px-20 py-20 bg-blend-hard-light backdrop-blur-sm text-gray-800">
        <h1 className="text-4xl font-bold mb-10 text-center text-white">Our Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <Card key={i} title={s.title} description={s.description} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
