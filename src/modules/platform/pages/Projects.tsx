import PageMeta from "@/components/shared/PageMeta";
import ProjectsHeader from "../components/projects/ProjectsHeader";
import JahiSection from "../components/projects/JahiSection";
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
        description="The Dream Home in Jahi now selling, Zenith Terraces delivered in Guzape, Kado Homes selling, Idu Estate rising: four points on the sun's climb across Abuja."
      />
      <ProjectsHeader />
      <JahiSection />
      <GuzapeSection />
      <KadoSection />
      <IduSection />
      <HowWeBuildSection />
      <AtAGlanceSection />
    </main>
  );
}
