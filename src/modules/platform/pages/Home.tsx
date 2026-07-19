import PageMeta from "@/components/shared/PageMeta";
import HeroSection from "../components/home/HeroSection";
import SunPathSection from "../components/home/SunPathSection";
import InsideSection from "../components/home/InsideSection";
import GoldenHourSection from "../components/home/GoldenHourSection";
import ClimbCtaSection from "../components/home/ClimbCtaSection";

export default function Home() {
  return (
    <main>
      <PageMeta
        title="Zenith Homes and Apartments · Peak of Excellence"
        description="Luxury terraces, duplexes and family homes across Jahi, Guzape, Idu and Kado, Abuja. Every home has a zenith: we build it."
      />
      <HeroSection />
      <SunPathSection />
      <InsideSection />
      <GoldenHourSection />
      <ClimbCtaSection />
    </main>
  );
}
