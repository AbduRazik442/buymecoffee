import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/landing/Hero";
import CreatorShowcase from "../components/landing/CreatorShowcase";
import HowItWorks from "../components/landing/HowItWorks";
import Features from "../components/landing/Features";
import Benefits from "../components/landing/Benefits";
import Testimonials from "../components/landing/Testimonials";
import FAQ from "../components/landing/FAQ";
import CTA from "../components/landing/CTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      <main>
        <Hero />
        <CreatorShowcase />
        <HowItWorks />
        <Features />
        <Benefits />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}