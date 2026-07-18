import PageMeta from "@/components/shared/PageMeta";
import ExperienceHeader from "../components/experience/ExperienceHeader";
import DayTimeline from "../components/experience/DayTimeline";
import PromiseSection from "../components/experience/PromiseSection";

export default function Experience() {
  return (
    <main>
      <PageMeta
        title="The Experience | Zenith Homes and Apartments"
        description="A day lived at the peak: what owning a Zenith home feels like, from first light to nightfall, with after-sales care that never stops."
      />
      <ExperienceHeader />
      <DayTimeline />
      <PromiseSection />
    </main>
  );
}
