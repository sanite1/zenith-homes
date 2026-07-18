import { PILLARS, type Pillar } from "@/data/about-data";

// Sun-position miniature for each pillar: rising, morning dot, blazing noon, setting star.
const PillarMotif = ({ motif }: { motif: Pillar["motif"] }) => (
  <span className="relative h-[30px] w-[54px] border-b-[1.5px] border-gold-500/50">
    {motif === "rising" && (
      <span className="absolute -bottom-px left-1 h-2 w-4 rounded-t-2xl bg-gold-400" />
    )}
    {motif === "morning" && (
      <span className="absolute bottom-1 left-[19px] h-4 w-4 rounded-full bg-gold-400" />
    )}
    {motif === "noon" && (
      <span className="absolute bottom-2 left-[19px] h-4 w-4 rounded-full bg-gold-400 shadow-[0_0_10px_rgba(233,169,29,.8)]" />
    )}
    {motif === "setting" && (
      <>
        <span className="absolute right-1 -bottom-px h-2 w-4 rounded-t-2xl bg-gold-400" />
        <span className="absolute right-2 bottom-2.5 text-[9px] text-gold-600">
          ✦
        </span>
      </>
    )}
  </span>
);

const PillarsSection = () => (
  <section className="mx-auto max-w-[1168px] px-5 pt-16 pb-20 sm:px-6 lg:px-0 lg:pt-[70px]">
    <div className="mb-10 text-center lg:mb-[50px]">
      <div className="mb-3.5 text-xs font-bold tracking-[0.3em] text-gold-600">
        WHAT SETS ZENITH APART
      </div>
      <h2 className="text-[clamp(30px,4vw,42px)] font-bold text-ink-900">
        Four pillars, <span className="text-gold-500 italic">one standard.</span>
      </h2>
    </div>
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {PILLARS.map((pillar) => (
        <article
          key={pillar.numeral}
          className="rounded-[22px] border border-forest-700/12 p-7 transition-colors hover:border-gold-400 hover:bg-[#fffdf6] sm:p-9 sm:pb-10"
        >
          <div className="mb-6 flex items-center justify-between">
            <span className="text-[13px] font-bold text-gold-500">
              {pillar.numeral}
            </span>
            <PillarMotif motif={pillar.motif} />
          </div>
          <h3 className="mb-2.5 text-[22px] font-bold text-ink-900">
            {pillar.title}
          </h3>
          <p className="text-sm leading-[1.8] text-ink-500">{pillar.body}</p>
        </article>
      ))}
    </div>
  </section>
);

export default PillarsSection;
