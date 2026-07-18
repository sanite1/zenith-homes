import { Link } from "react-router-dom";
import { PROJECT_CHAPTERS } from "@/data/projects-data";
import photoExterior from "@/assets/photo-exterior.jpg";
import photoKitchen from "@/assets/photo-kitchen.jpg";
import photoLiving from "@/assets/photo-living.jpg";

const guzape = PROJECT_CHAPTERS.find((c) => c.id === "guzape")!;

const GuzapeSection = () => (
  <section
    id="guzape"
    className="mx-auto max-w-[1168px] scroll-mt-24 px-5 pt-16 pb-10 sm:px-6 lg:px-0"
  >
    <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1.15fr_1fr]">
      <div className="relative">
        <img loading="lazy"
          src={photoExterior}
          alt="Zenith Terraces, Guzape"
          className="block h-[320px] w-full rounded-[22px] object-cover object-[50%_30%] sm:h-[520px]"
        />
        <div className="absolute top-[18px] left-[18px] rounded-full bg-forest-700/[.92] px-4 py-2 text-[11px] font-bold tracking-[0.12em] text-white">
          {guzape.badge}
        </div>
        <div className="absolute right-[18px] -bottom-[26px] flex gap-3">
          <img loading="lazy"
            src={photoKitchen}
            alt="Interior"
            className="h-[86px] w-[120px] rounded-xl border-4 border-white object-cover shadow-[0_12px_30px_rgba(8,24,12,.25)] max-sm:h-[64px] max-sm:w-[90px]"
          />
          <img loading="lazy"
            src={photoLiving}
            alt="Living room"
            className="h-[86px] w-[120px] rounded-xl border-4 border-white object-cover shadow-[0_12px_30px_rgba(8,24,12,.25)] max-sm:h-[64px] max-sm:w-[90px]"
          />
        </div>
      </div>
      <div className="max-lg:pt-8">
        <div className="mb-[18px] flex items-center gap-4">
          <div className="relative h-12 w-[88px] border-b-2 border-gold-500">
            <span className="absolute -bottom-[11px] left-1/2 h-[22px] w-[22px] -translate-x-1/2 rounded-full bg-gold-400 shadow-[0_0_12px_rgba(233,169,29,.8)]" />
            <span className="absolute top-0 left-0 text-[9.5px] font-bold tracking-[0.18em] text-gold-600">
              {guzape.sunLabel}
            </span>
          </div>
          <div className="text-xs font-bold tracking-[0.2em] text-gold-600">
            {guzape.chapter}
          </div>
        </div>
        <h2 className="text-[clamp(32px,4vw,44px)] leading-[1.1] font-bold text-ink-900">
          {guzape.name}
        </h2>
        <div className="mt-2 text-[17px] font-semibold text-gold-500 italic">
          {guzape.tagline}
        </div>
        <p className="my-5 text-[15px] leading-[1.85] text-ink-500 lg:mb-[26px]">
          {guzape.description}
        </p>
        <div className="mb-7 flex flex-wrap gap-2.5">
          {guzape.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-forest-700/20 px-4 py-2 text-[12.5px] text-ink-600"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-3.5 sm:flex-row">
          <Link
            to="/contact"
            className="rounded-full bg-forest-700 px-7 py-3.5 text-center text-sm font-semibold text-white"
          >
            Join the waitlist
          </Link>
          <Link
            to="/experience"
            className="rounded-full border-[1.5px] border-forest-700/30 px-7 py-3.5 text-center text-sm font-semibold text-forest-700"
          >
            Hear from residents
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default GuzapeSection;
