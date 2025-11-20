import Navbar from "../../components/customer/Navbar";
import Footer from "../../components/customer/Footer";
import Card from "../../components/customer/Card";

export default function Portfolio() {
  const projects = [
    { title: "Project Alpha", description: "Next-gen RAN optimization" },
    { title: "Project Beta", description: "AI-driven spectrum allocation" },
    { title: "Project Gamma", description: "Firmware & embedded systems" },
    { title: "Project Delta", description: "Private 5G network deployment" },
  ];

  return (
    <>
      <Navbar />
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-10 text-center">Portfolio</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <Card key={i} title={p.title} description={p.description} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
