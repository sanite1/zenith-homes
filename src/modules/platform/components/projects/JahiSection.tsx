import { Link } from "react-router-dom";
import { PROJECT_CHAPTERS, JAHI_PRICING } from "@/data/projects-data";
import photoJahiFront from "@/assets/photo-jahi-front.jpg";
import photoJahiSide from "@/assets/photo-jahi-side.jpg";

const jahi = PROJECT_CHAPTERS.find((c) => c.id === "jahi")!;

const JahiSection = () => (
  <section
    id="jahi"
    className="scroll-mt-24 bg-[linear-gradient(#fff,#fbf3e3_18%,#fbf3e3_82%,#fff)] px-4 pt-14 pb-[70px] sm:px-6 lg:pt-16"
  >
    <div className="mx-auto max-w-[1168px]">
      <div className="grid grid-cols-1 overflow-hidden rounded-[28px] bg-forest-700 lg:grid-cols-[1.05fr_1.1fr]">
        <div className="relative p-7 text-white sm:p-12 lg:px-[52px] lg:py-[58px]">
          <div className="absolute top-0 left-7 h-9 w-px bg-[linear-gradient(rgba(255,215,94,.8),transparent)] sm:left-[52px]" />
          <div className="mb-[18px] flex items-center gap-4">
            <div className="relative h-12 w-[88px] border-b-2 border-gold-300/70">
              <span className="absolute -bottom-[11px] left-[22px] h-[22px] w-[22px] rounded-full bg-gold-300 shadow-[0_0_16px_rgba(255,215,94,.9)]" />
              <span className="absolute top-0 left-0 text-[9.5px] font-bold tracking-[0.18em] text-gold-300">
                {jahi.sunLabel}
              </span>
            </div>
            <div className="text-xs font-bold tracking-[0.2em] text-gold-300">
              {jahi.chapter}
            </div>
          </div>
          <div className="mb-[18px] inline-flex items-center gap-2 rounded-full bg-flame-500 px-[15px] py-[7px] text-[11px] font-bold tracking-[0.12em]">
            <span className="h-[7px] w-[7px] rounded-full bg-white" />
            {jahi.badge}
          </div>
          <h2 className="text-[clamp(32px,4vw,44px)] leading-[1.1] font-bold">
            {jahi.name}
          </h2>
          <div className="mt-2 text-[17px] font-semibold text-gold-300 italic">
            {jahi.tagline}
          </div>
          <p className="my-5 text-[15px] leading-[1.85] text-sage-300">
            {jahi.description}
          </p>
          <div className="mb-6 flex flex-wrap gap-2.5">
            {jahi.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/30 px-4 py-2 text-[12.5px] text-sage-200"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Pricing: two honest ways to own */}
          <div className="mb-7 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
            {JAHI_PRICING.map((option) => (
              <div
                key={option.id}
                className="rounded-2xl border border-gold-300/30 bg-white/[.06] px-5 py-4"
              >
                <div className="text-[10.5px] font-bold tracking-[0.22em] text-gold-300">
                  {option.label}
                </div>
                <div className="mt-1.5 text-[30px] font-bold">
                  {option.price}
                </div>
                <div className="text-xs text-sage-500">{option.note}</div>
                <div className="mt-3 border-t border-white/15 pt-3 text-[12.5px] leading-[1.8] text-sage-200">
                  {option.planLines.map((line) => (
                    <div key={line}>· {line}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <Link
              to="/contact?interest=jahi"
              className="rounded-full bg-gradient-to-br from-gold-300 to-gold-400 px-[30px] py-[15px] text-center text-[14.5px] font-bold text-forest-700"
            >
              Book a viewing →
            </Link>
            <Link
              to="/contact?interest=jahi"
              className="rounded-full border-[1.5px] border-white/45 px-[30px] py-[15px] text-center text-[14.5px] font-semibold text-white"
            >
              Request floor plans
            </Link>
          </div>
        </div>
        <div className="relative min-h-[400px] lg:min-h-[680px]">
          <img
            loading="lazy" decoding="async"
            src={photoJahiFront}
            alt="The Dream Home, Jahi: four 4-bed terraces at dusk"
            className="absolute inset-x-0 top-0 h-[55%] w-full object-cover"
          />
          <img
            loading="lazy" decoding="async"
            src={photoJahiSide}
            alt="The Dream Home, Jahi: side elevation"
            className="absolute inset-x-0 bottom-0 h-[45%] w-full object-cover"
          />
          <div className="absolute top-[22px] right-[22px] rounded-[14px] bg-white/[.94] px-[18px] py-3 text-[12.5px] font-bold text-forest-700 shadow-[0_12px_30px_rgba(8,24,12,.3)]">
            ◔ Artist's impression · under construction
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default JahiSection;
