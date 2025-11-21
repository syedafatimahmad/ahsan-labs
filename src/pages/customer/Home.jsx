import { motion } from "framer-motion";
import Navbar from "../../components/customer/Navbar";
import Footer from "../../components/customer/Footer";
import Card from "../../components/customer/Card";
import Button from "../../components/customer/Button";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <header className="relative .bg-gradient-to-br from-aramcoGreen/80 to-blue-800/80 text-white py-24 md:py-36 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg"
          >
            Welcome to AhsanLabs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl max-w-2xl mx-auto mb-8 drop-shadow-sm"
          >
            Innovative solutions in wireless communication and software-driven networks.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300">
              Learn More
            </Button>
          </motion.div>
        </div>
      </header>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {["Open RAN Solutions", "AI Optimized Networks", "Firmware Development"].map((title, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <Card 
                title={title} 
                description={
                  title === "Open RAN Solutions"
                    ? "Software-defined radio access networks for modern telecom."
                    : title === "AI Optimized Networks"
                    ? "Machine learning algorithms to improve spectral efficiency."
                    : "Optimized firmware for wireless devices."
                }
                className="hover:scale-105 transition-transform duration-300 shadow-xl rounded-xl"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Portfolio Section with Hover Video */}
      <section className="bg-gradient-to-tr from-black/20 via-white/5 to-black/20 py-20">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-white"
        >
          Portfolio
        </motion.h2>
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { title: "Project Alpha", description: "Next-gen RAN optimization.", video: "/videos/project-alpha.mp4" },
            { title: "Project Beta", description: "AI-driven spectrum allocation.", video: "/videos/project-beta.mp4" },
            { title: "Project Gamma", description: "Firmware & embedded systems.", video: "/videos/project-gamma.mp4" },
          ].map((proj, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative group rounded-xl overflow-hidden shadow-2xl"
            >
              <video
                src={proj.video}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:opacity-80"
                muted
                loop
                autoPlay
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl font-bold text-white">{proj.title}</h3>
                <p className="text-sm text-white">{proj.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
