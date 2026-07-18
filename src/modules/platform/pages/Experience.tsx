import PageMeta from "@/components/shared/PageMeta";
import ExperienceHeader from "../components/experience/ExperienceHeader";
import JourneySection from "../components/experience/JourneySection";
import PromiseSection from "../components/experience/PromiseSection";

export default function Experience() {
  return (
    <main>
      <PageMeta
        title="The Experience | Zenith Homes and Apartments"
        description="The Zenith Experience: personalized service before, a community of belonging during, and after-sales support long after the keys are in your hand."
      />
      <ExperienceHeader />
      <JourneySection />
      <PromiseSection />
    </main>
  );
}
