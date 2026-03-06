import Navbar from "@/components/Navbar";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <Navbar />
      <About />
      <CTA />
      <Footer />
    </div>
  );
}
