import { Link } from "react-router-dom";
import { HOME_EXPERIENCE_CARDS, type ExperienceCard } from "@/data/home-data";

// Tiny sun-position glyphs: rising, at noon, setting.
const SunGlyph = ({ id }: { id: ExperienceCard["id"] }) => (
  <div className="relative mb-5 h-[34px] w-14 border-b-2 border-gold-600">
    {id === "morning" && (
      <span className="absolute -bottom-px left-1.5 h-[11px] w-[22px] rounded-t-[22px] bg-gold-400" />
    )}
    {id === "noon" && (
      <span className="absolute bottom-1.5 left-[17px] h-[22px] w-[22px] rounded-full bg-gold-400 shadow-[0_0_14px_rgba(233,169,29,.7)]" />
    )}
    {id === "evening" && (
      <>
        <span className="absolute right-1.5 -bottom-px h-[11px] w-[22px] rounded-t-[22px] bg-gold-400" />
        <span className="absolute right-2.5 bottom-[13px] text-[11px] text-gold-600">
          ✦
        </span>
      </>
    )}
  </div>
);

const GoldenHourSection = () => (
  <section className="relative overflow-hidden bg-[linear-gradient(#fdf9ef,#faf0da_26%,#f6e3ba)] px-5 py-16 sm:px-10 lg:px-14 lg:pt-[92px] lg:pb-[84px]">
    <div className="mx-auto max-w-[1168px]">
      <div className="mx-auto max-w-[820px] text-center">
        <div className="mb-[18px] text-xs font-bold tracking-[0.3em] text-gold-600">
          THE ZENITH EXPERIENCE
        </div>
        <blockquote className="text-[clamp(26px,3.5vw,40px)] leading-[1.3] font-bold text-[#3a2f14]">
          "Your journey with us doesn't end at the doorstep.{" "}
          <span className="text-gold-600 italic">It begins there.</span>"
        </blockquote>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-[26px] lg:mt-14">
        {HOME_EXPERIENCE_CARDS.map((card) => (
          <article
            key={card.id}
            className="rounded-[20px] border border-gold-600/25 bg-white/75 p-[30px] pb-[34px]"
          >
            <SunGlyph id={card.id} />
            <h3 className="text-[19px] font-bold text-ink-900">{card.title}</h3>
            <p className="mt-2 text-sm leading-[1.75] text-[#6b5f45]">
              {card.body}
            </p>
          </article>
        ))}
      </div>
      <div className="mt-11 flex flex-wrap justify-center gap-x-11 gap-y-3 text-xs font-bold tracking-[0.2em] text-[#8a7648]">
        <span>MORNING · HANDOVER</span>
        <Link to="/experience" className="text-gold-600 hover:text-gold-500">
          NOON · COMMUNITY
        </Link>
        <span>EVENING · CARE</span>
      </div>
    </div>
  </section>
);

export default GoldenHourSection;
