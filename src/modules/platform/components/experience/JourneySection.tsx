import { JOURNEY_STAGES } from "@/data/experience-data";
import { cn } from "@/lib/utils";
import StageSun from "./StageSun";

const JourneySection = () => (
  <section className="bg-[linear-gradient(#fdf9ef,#fff_60%)] px-5 py-16 sm:px-6 lg:py-24">
    <div className="mx-auto max-w-[900px]">
      {JOURNEY_STAGES.map((stage, i) => (
        <div
          key={stage.id}
          id={stage.id}
          className={cn(
            "grid scroll-mt-28 gap-4 py-10 lg:grid-cols-[150px_1fr] lg:gap-8 lg:py-14",
            i > 0 && "border-t border-gold-500/20",
          )}
        >
          <div className="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-5">
            <span className="text-[52px] leading-none font-bold text-gold-500/25 lg:text-[68px]">
              {stage.index}
            </span>
            <span className="flex h-6 items-end">
              <StageSun marker={stage.marker} />
            </span>
          </div>
          <div>
            <h2 className="text-[clamp(24px,3vw,30px)] font-bold text-ink-900">
              {stage.title}
            </h2>
            <div className="mt-1.5 text-[15.5px] font-semibold text-gold-600 italic">
              {stage.pull}
            </div>
            <p className="mt-3.5 max-w-[600px] text-[15px] leading-[1.9] text-ink-500">
              {stage.body}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default JourneySection;
