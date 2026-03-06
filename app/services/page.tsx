import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <Navbar />
      <Services />
      <CTA />
      <Footer />
    </div>
  );
}
