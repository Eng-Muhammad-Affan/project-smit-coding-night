import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { CoreFlowSection } from "../components/CoreFlowSection";
import { FeaturedRequestsSection } from "../components/FeaturedRequestsSection";
import { Footer } from "../components/Footer";

export default function HomePage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "radial-gradient(ellipse 55% 55% at 0% 0%, rgba(180,225,215,0.4) 0%, transparent 55%), radial-gradient(ellipse 55% 55% at 100% 0%, rgba(255,215,175,0.45) 0%, transparent 55%), #EDE8DF",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <Navbar />
      <HeroSection />
      <CoreFlowSection />
      <FeaturedRequestsSection />
      <Footer />
    </div>
  );
}
