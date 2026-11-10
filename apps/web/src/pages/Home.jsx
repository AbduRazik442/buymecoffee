import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import CreatorShowcase from "../components/landing/CreatorShowcase";
import HowItWorks from "../components/landing/HowItWorks";
import Features from "../components/landing/Features";
import Benefits from "../components/landing/Benefits";
import Testimonials from "../components/landing/Testimonials";
import FAQ from "../components/landing/FAQ";
import CTA from "../components/landing/CTA";
import Support from "../components/landing/Support";
import Membership from "../components/landing/Membership";
import Publish from "../components/landing/Publish";
import CreatorHero from "../components/landing/CreatorHero";
import Shop from "../components/landing/Shop";

export default function Home() {
  return (
    <div className="min-h-screen bg-surface">
      <Navbar />

      <main>
        <CreatorHero />
        <Support />
        <Membership />
        <Shop />
        <Publish />
        <Benefits />
        {/* <CreatorShowcase /> */}
        {/* <HowItWorks />
        <Features />
        <Benefits />
        <Testimonials /> */}
        {/* <FAQ /> */}
        {/* <CTA /> */}
      </main>

      <Footer />
    </div>
  );
}