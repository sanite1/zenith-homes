import PageMeta from "@/components/shared/PageMeta";
import AboutHeader from "../components/about/AboutHeader";
import StorySection from "../components/about/StorySection";
import MissionVisionSection from "../components/about/MissionVisionSection";
import PillarsSection from "../components/about/PillarsSection";
import JoinSection from "../components/about/JoinSection";
import VisitSection from "../components/about/VisitSection";

export default function About() {
  return (
    <main>
      <PageMeta
        title="About | Zenith Homes and Apartments"
        description="Foundations of excellence, a future of dreams: the story, mission and four pillars behind Zenith Homes And Apartments Ltd, Abuja."
      />
      <AboutHeader />
      <StorySection />
      <MissionVisionSection />
      <PillarsSection />
      <JoinSection />
      <VisitSection />
    </main>
  );
}
