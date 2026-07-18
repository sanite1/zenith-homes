import PageMeta from "@/components/shared/PageMeta";
import ProjectsHeader from "../components/projects/ProjectsHeader";
import GuzapeSection from "../components/projects/GuzapeSection";
import KadoSection from "../components/projects/KadoSection";
import IduSection from "../components/projects/IduSection";
import HowWeBuildSection from "../components/projects/HowWeBuildSection";
import AtAGlanceSection from "../components/projects/AtAGlanceSection";

export default function Projects() {
  return (
    <main>
      <PageMeta
        title="Projects | Zenith Homes and Apartments"
        description="Zenith Terraces in Guzape, Kado Homes now selling, and Idu Estate rising: three points on the sun's climb across Abuja."
      />
      <ProjectsHeader />
      <GuzapeSection />
      <KadoSection />
      <IduSection />
      <HowWeBuildSection />
      <AtAGlanceSection />
    </main>
  );
}
