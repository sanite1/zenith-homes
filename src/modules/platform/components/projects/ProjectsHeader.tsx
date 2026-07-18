import { PROJECT_CHAPTERS } from "@/data/projects-data";
import { cn } from "@/lib/utils";

const ProjectsHeader = () => (
  <section className="relative overflow-hidden bg-forest-800 pt-6 pb-24 lg:pb-[150px]">
    <div className="absolute -top-[140px] -right-[140px] h-[420px] w-[420px] rounded-full border border-dashed border-gold-300/30" />
    <div className="absolute -top-[60px] -right-[60px] h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(255,215,94,.35),rgba(233,169,29,.08)_70%,transparent_72%)]" />

    <div className="relative z-[2] mx-auto mt-32 max-w-[1168px] px-5 text-white sm:px-6 lg:mt-40 lg:px-0">
      <div className="mb-[18px] text-xs font-bold tracking-[0.3em] text-gold-300">
        THE PORTFOLIO
      </div>
      <h1 className="max-w-[820px] text-[clamp(38px,5vw,64px)] leading-[1.08] font-light">
        Three points on{" "}
        <span className="font-bold">
          the sun's climb<span className="text-gold-300">.</span>
        </span>
      </h1>
      <nav className="mt-8 flex flex-wrap gap-x-8 gap-y-4 text-[11px] font-semibold tracking-[0.16em] sm:text-[12.5px] lg:gap-[34px]">
        {PROJECT_CHAPTERS.map((chapter) => (
          <a
            key={chapter.id}
            href={`#${chapter.id}`}
            className={cn(
              "pb-[5px]",
              chapter.id === "kado"
                ? "border-b-[1.5px] border-gold-300 text-gold-300"
                : "border-b-[1.5px] border-gold-300/60 text-sage-200 hover:text-gold-300",
            )}
          >
            {chapter.anchorLabel}
          </a>
        ))}
      </nav>
    </div>
    <div className="absolute -right-[30%] -bottom-[120px] -left-[30%] h-[200px] rounded-t-[50%] bg-white max-lg:hidden" />
  </section>
);

export default ProjectsHeader;
