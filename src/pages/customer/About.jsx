import Navbar from "../../components/customer/Navbar";
import Footer from "../../components/customer/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <section className="bg-blend-hard-light backdrop-blur-sm text-white py-32 text-center">
        <h1 className="text-4xl font-bold mb-6">About AhsanLabs</h1>
        <p className="text-lg mb-4 ">
          AhsanLabs specializes in innovative solutions for wireless communication networks.
          We combine cutting-edge algorithms, firmware expertise, and AI-driven network optimization
          to help telecom operators improve efficiency and performance.
        </p>
        <p className="text-lg ">
          Our mission is to empower operators with software-first solutions that reduce cost-per-bit,
          increase spectral efficiency, and enable flexible, next-generation wireless networks.
        </p>
      </section>
      <Footer />
    </>
  );
}
