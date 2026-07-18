import { TIMELINE_STOPS, type TimelineStop } from "@/data/experience-data";
import { cn } from "@/lib/utils";

// Sun-position markers along the day: crescent rising, dot climbing,
// full blaze at noon, dot sinking, moon at night.
const Marker = ({ stop }: { stop: TimelineStop }) => {
  if (stop.marker === "noon") {
    return (
      <div className="h-[52px] w-[52px] rounded-full bg-[radial-gradient(circle_at_38%_32%,#ffd75e,#e9a91d)] shadow-[0_0_34px_rgba(233,169,29,.8)]" />
    );
  }
  return (
    <div
      className={cn(
        "flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-gold-500/50",
        stop.marker === "night" ? "bg-forest-700" : "bg-white",
      )}
    >
      {stop.marker === "rising" && (
        <span className="mt-2 block h-2 w-4 rounded-t-2xl bg-gold-400" />
      )}
      {stop.marker === "morning" && (
        <span className="block h-[15px] w-[15px] translate-y-[3px] rounded-full bg-gold-400" />
      )}
      {stop.marker === "golden" && (
        <span className="block h-[15px] w-[15px] translate-y-1.5 rounded-full bg-gold-400" />
      )}
      {stop.marker === "night" && (
        <span className="block h-3.5 w-3.5 rounded-full bg-cream-300 [box-shadow:-4px_0_0_0_#123317_inset]" />
      )}
    </div>
  );
};

const StopCard = ({ stop }: { stop: TimelineStop }) => (
  <div
    className={cn(
      "inline-block max-w-[380px] rounded-[20px] p-6 text-left sm:px-7",
      stop.highlight
        ? "bg-forest-700 text-white shadow-[0_22px_50px_rgba(18,51,23,.3)]"
        : "border border-gold-500/35 bg-white shadow-[0_14px_36px_rgba(58,47,20,.08)]",
    )}
  >
    <div
      className={cn(
        "mb-2.5 text-[11px] font-bold tracking-[0.22em]",
        stop.highlight ? "text-gold-300" : "text-gold-600",
      )}
    >
      {stop.time}
    </div>
    <h3
      className={cn(
        "text-xl font-bold",
        stop.highlight ? "text-white" : "text-ink-900",
      )}
    >
      {stop.title}
    </h3>
    <p
      className={cn(
        "mt-2 text-sm leading-[1.75]",
        stop.highlight ? "text-sage-300" : "text-[#6b6353]",
      )}
    >
      {stop.body}
    </p>
  </div>
);

const DayTimeline = () => (
  <section className="relative bg-[linear-gradient(#fdf9ef,#fff_60%)] px-5 py-16 sm:px-6 lg:pt-[84px] lg:pb-[60px]">
    <div className="relative mx-auto max-w-[1000px]">
      {/* Center rail at desktop, left rail on small screens */}
      <div className="absolute top-0 bottom-0 left-[22px] w-[1.5px] bg-[linear-gradient(rgba(233,169,29,.15),rgba(233,169,29,.7)_20%,rgba(233,169,29,.7)_80%,rgba(233,169,29,.15))] md:left-1/2 md:-translate-x-1/2" />

      {TIMELINE_STOPS.map((stop, i) => (
        <div
          key={stop.id}
          className={cn(
            "relative md:grid md:grid-cols-[1fr_120px_1fr] md:items-center",
            i < TIMELINE_STOPS.length - 1 && "mb-10 md:mb-[54px]",
            "max-md:flex max-md:gap-5 max-md:pl-0",
          )}
        >
          {/* Mobile: marker on the rail, card beside it */}
          <div className="z-[2] shrink-0 max-md:flex max-md:w-11 max-md:justify-center md:hidden">
            <Marker stop={stop} />
          </div>
          <div className="md:hidden">
            <StopCard stop={stop} />
          </div>

          {/* Desktop: alternating sides */}
          <div className="hidden pr-2.5 text-right md:block">
            {stop.side === "left" && <StopCard stop={stop} />}
          </div>
          <div className="hidden justify-center md:flex">
            <Marker stop={stop} />
          </div>
          <div className="hidden pl-2.5 md:block">
            {stop.side === "right" && <StopCard stop={stop} />}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default DayTimeline;
