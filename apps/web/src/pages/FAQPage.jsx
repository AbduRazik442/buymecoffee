import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import FAQ from "../components/landing/FAQ";

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      <main>
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}