import { PROJECT_CHAPTERS, type ProjectChapter } from "@/data/projects-data";
import { cn } from "@/lib/utils";
import photoJahi from "@/assets/photo-jahi-front.jpg";
import photoExterior from "@/assets/photo-exterior.jpg";
import photoKado from "@/assets/photo-kado-front.jpg";
import photoIdu from "@/assets/photo-idu-estate.jpg";

const CHAPTER_META: Record<
  ProjectChapter["id"],
  { image: string; status: string; tone: "selling" | "delivered" | "rising" }
> = {
  jahi: { image: photoJahi, status: "Now selling", tone: "selling" },
  guzape: { image: photoExterior, status: "Delivered 2025", tone: "delivered" },
  kado: { image: photoKado, status: "Sold", tone: "delivered" },
  idu: { image: photoIdu, status: "Rising", tone: "rising" },
};

const StatusDot = ({ tone }: { tone: "selling" | "delivered" | "rising" }) => (
  <span
    className={cn(
      "h-2 w-2 shrink-0 rounded-full",
      tone === "selling" && "bg-flame-500 shadow-[0_0_6px_rgba(232,64,31,.8)]",
      tone === "delivered" && "bg-forest-600",
      tone === "rising" && "box-border border-[1.5px] border-gold-500 bg-white",
    )}
  />
);

const ProjectsHeader = () => (
  <div className="relative">
    <section className="relative overflow-hidden bg-forest-800 pt-6 pb-24 lg:pb-36">
      <div className="absolute -top-[140px] -right-[140px] h-[420px] w-[420px] rounded-full border border-dashed border-gold-300/30" />
      <div className="absolute -top-[60px] -right-[60px] h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(255,215,94,.35),rgba(233,169,29,.08)_70%,transparent_72%)]" />

      <div className="relative z-[2] mx-auto mt-32 grid max-w-[1168px] gap-10 px-5 text-white sm:px-6 lg:mt-36 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:px-0">
        <div>
          <div className="mb-[18px] text-xs font-bold tracking-[0.3em] text-gold-300">
            THE PORTFOLIO
          </div>
          <h1 className="text-[clamp(38px,4.5vw,58px)] leading-[1.08] font-light">
            Four points on
            <span className="block font-bold">
              the sun's climb<span className="text-gold-300">.</span>
            </span>
          </h1>
          <p className="mt-5 max-w-[460px] text-[14.5px] leading-[1.8] text-sage-300">
            From terraces already lived in to keys you can reserve today.
            Every Zenith project is a point on the same climb: pick a chapter
            and jump straight to it.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#jahi"
              className="rounded-full bg-gradient-to-br from-gold-300 to-gold-400 px-7 py-3.5 text-center text-[14px] font-bold text-forest-800"
            >
              The Dream Home · now selling →
            </a>
            <a
              href="#how-we-build"
              className="rounded-full border-[1.5px] border-white/40 px-7 py-3.5 text-center text-[14px] font-semibold text-white transition-colors hover:border-gold-300 hover:text-gold-300"
            >
              How we build
            </a>
          </div>
        </div>

        {/* The climb itself: four suns rising to the zenith */}
        <div className="relative hidden h-[300px] lg:block" aria-hidden="true">
          <div className="absolute top-[10px] left-[220px] h-[150px] w-[150px] rounded-full bg-[radial-gradient(circle_at_45%_40%,rgba(255,215,94,.28),transparent_70%)]" />
          <svg
            viewBox="0 0 520 300"
            fill="none"
            className="absolute inset-0 h-full w-full"
          >
            <path
              d="M 12 272 Q 250 -55 508 238"
              stroke="#e9a91d"
              strokeOpacity=".55"
              strokeWidth="2"
              strokeDasharray="2 9"
              strokeLinecap="round"
            />
          </svg>
          <span className="absolute top-[172px] left-[68px] h-3.5 w-3.5 rounded-full bg-gold-500" />
          <span className="absolute top-[86px] left-[152px] h-3.5 w-3.5 rounded-full bg-gold-400 shadow-[0_0_10px_rgba(233,169,29,.8)]" />
          <span className="absolute top-[38px] left-[268px] h-9 w-9 rounded-full bg-[radial-gradient(circle_at_38%_32%,#ffd75e,#e9a91d)] shadow-[0_0_36px_rgba(255,215,94,.9)]" />
          <span className="absolute top-[16px] left-[318px] text-[10.5px] font-bold tracking-[0.26em] text-gold-300">
            THE ZENITH
          </span>
          <span className="absolute top-[150px] left-[432px] box-border h-3.5 w-3.5 rounded-full border-2 border-gold-400 bg-transparent" />
        </div>
      </div>

      <div className="absolute -right-[30%] -bottom-[120px] -left-[30%] h-[200px] rounded-t-[50%] bg-white max-lg:hidden" />
    </section>

    {/* Chapter index cards, cutting out of the header's horizon */}
    <div className="relative z-10 mx-auto -mt-12 grid max-w-[1168px] grid-cols-1 gap-3.5 px-4 sm:grid-cols-2 sm:px-6 lg:-mt-14 lg:grid-cols-4 lg:gap-4 lg:px-0">
      {PROJECT_CHAPTERS.map((chapter, i) => {
        const meta = CHAPTER_META[chapter.id];
        return (
          <a
            key={chapter.id}
            href={`#${chapter.id}`}
            className="group flex items-center gap-3.5 rounded-2xl bg-white p-3 shadow-[0_18px_44px_rgba(8,24,12,.16)] ring-1 ring-forest-700/[.06] transition-transform duration-200 hover:-translate-y-1"
          >
            <img
              src={meta.image}
              decoding="async"
              alt={chapter.name}
              className="h-[52px] w-[52px] shrink-0 rounded-xl object-cover"
            />
            <div className="min-w-0">
              <div className="text-[10px] font-bold tracking-[0.18em] text-gold-600">
                0{i + 1} · {chapter.id.toUpperCase()}
              </div>
              <div className="truncate text-[14.5px] font-bold text-ink-900 group-hover:text-forest-700">
                {chapter.name}
              </div>
              <div className="mt-0.5 flex items-center gap-1.5 text-[11.5px] text-ink-400">
                <StatusDot tone={meta.tone} />
                {meta.status}
              </div>
            </div>
          </a>
        );
      })}
    </div>
  </div>
);

export default ProjectsHeader;
