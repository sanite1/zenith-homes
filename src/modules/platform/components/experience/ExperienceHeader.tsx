import { JOURNEY_STAGES } from "@/data/experience-data";
import { cn } from "@/lib/utils";
import photoJahiSide from "@/assets/photo-jahi-side.jpg";
import StageSun from "./StageSun";

const ExperienceHeader = () => (
  <div className="relative">
    <section className="relative overflow-hidden bg-forest-800 pt-6 pb-24 lg:pb-32">
      <div className="absolute -top-[120px] -left-[120px] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle_at_55%_60%,rgba(255,215,94,.22),transparent_70%)]" />
      <div className="absolute -right-[100px] -bottom-[140px] h-[360px] w-[360px] rounded-full border border-dashed border-gold-300/25" />

      <div className="relative z-[2] mx-auto mt-32 grid max-w-[1168px] items-center gap-12 px-5 text-white sm:px-6 lg:mt-36 lg:grid-cols-[1.1fr_0.9fr] lg:px-0">
        <div>
          <div className="mb-[18px] text-xs font-bold tracking-[0.3em] text-gold-300">
            THE ZENITH EXPERIENCE
          </div>
          <h1 className="text-[clamp(38px,5vw,62px)] leading-[1.1] font-light">
            Far beyond{" "}
            <span className="font-bold">
              the keys in your hand<span className="text-gold-300">.</span>
            </span>
          </h1>
          <p className="mt-5 max-w-[520px] text-[15px] leading-[1.8] text-sage-300 sm:text-base">
            What makes Zenith exceptional is the experience around the home:
            personal service before, belonging during, and support long after.
          </p>
        </div>

        {/* Life inside, framed by the sunrise arch */}
        <div className="relative hidden justify-self-end lg:block">
          <div className="absolute -top-5 left-1/2 z-10 h-11 w-11 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_38%_32%,#ffd75e,#e9a91d)] shadow-[0_0_40px_rgba(255,215,94,.85)]" />
          <div className="h-[400px] w-[440px] overflow-hidden rounded-t-[220px] rounded-b-3xl shadow-[0_30px_70px_rgba(6,16,9,.5)] ring-1 ring-gold-300/40">
            <img
              src={photoJahiSide}
              alt="Zenith terraces glowing at golden hour"
              className="h-full w-full object-cover object-[35%_60%]"
            />
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-forest-950/60 px-4 py-2 text-[11px] font-bold tracking-[0.14em] whitespace-nowrap text-gold-300 backdrop-blur-[6px]">
            LIFE IN A ZENITH HOME
          </div>
        </div>
      </div>
    </section>

    {/* The journey in one bar, cutting out of the header.
        The band behind it is cream so it flows into the next section. */}
    <div className="bg-cream-50">
      <div className="relative z-10 mx-auto -mt-10 max-w-[720px] px-4 sm:px-6 lg:-mt-12 lg:px-0">
      <div className="grid grid-cols-3 rounded-[26px] bg-white p-1.5 shadow-[0_24px_60px_rgba(8,24,12,.2)] ring-1 ring-forest-700/[.06] lg:rounded-full lg:p-2">
        {JOURNEY_STAGES.map((stage, i) => (
          <a
            key={stage.id}
            href={`#${stage.id}`}
            className={cn(
              "flex flex-col items-center gap-1.5 rounded-[20px] px-1 py-3 text-center transition-colors hover:bg-cream-100 lg:rounded-full lg:py-3.5",
              i > 0 && "border-l border-forest-700/[.08]",
            )}
          >
            <span className="flex h-5 items-end">
              <StageSun marker={stage.marker} />
            </span>
            <span className="text-[10px] font-bold tracking-[0.14em] text-ink-900 sm:text-[11.5px] sm:tracking-[0.18em]">
              {stage.label}
            </span>
          </a>
        ))}
        </div>
      </div>
    </div>
  </div>
);

export default ExperienceHeader;
