import { Link } from "react-router-dom";
import { PROJECT_CHAPTERS } from "@/data/projects-data";
import photoIdu from "@/assets/photo-idu-estate.jpg";

const idu = PROJECT_CHAPTERS.find((c) => c.id === "idu")!;

const IduSection = () => (
  <section
    id="idu"
    className="mx-auto max-w-[1168px] scroll-mt-24 px-5 pt-[46px] pb-20 sm:px-6 lg:px-0"
  >
    <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1fr_1.15fr]">
      <div className="max-lg:order-2">
        <div className="mb-[18px] flex items-center gap-4">
          <div className="relative h-12 w-[88px] border-b-2 border-gold-500">
            <span className="absolute -right-1 -bottom-[11px] h-[22px] w-[22px] rounded-full border-2 border-gold-500 bg-white" />
            <span className="absolute top-0 left-0 text-[9.5px] font-bold tracking-[0.18em] text-gold-600">
              {idu.sunLabel}
            </span>
          </div>
          <div className="text-xs font-bold tracking-[0.2em] text-gold-600">
            {idu.chapter}
          </div>
        </div>
        <h2 className="text-[clamp(32px,4vw,44px)] leading-[1.1] font-bold text-ink-900">
          {idu.name}
        </h2>
        <div className="mt-2 text-[17px] font-semibold text-gold-500 italic">
          {idu.tagline}
        </div>
        <p className="my-5 text-[15px] leading-[1.85] text-ink-500 lg:mb-[26px]">
          {idu.description}
        </p>
        <div className="mb-[30px] flex flex-wrap gap-2.5">
          {idu.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-forest-700/20 px-4 py-2 text-[12.5px] text-ink-600"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mb-[30px] rounded-2xl border border-gold-500/30 bg-cream-100 px-[22px] py-[18px]">
          <div className="mb-1.5 text-[11px] font-bold tracking-[0.2em] text-gold-600">
            EARLY-BIRD PRIORITY
          </div>
          <p className="text-[13.5px] leading-[1.7] text-ink-500">
            Register interest now to get first pick of plots, pre-launch
            pricing, and construction updates straight from site.
          </p>
        </div>
        <Link
          to="/contact?interest=idu"
          className="inline-block rounded-full bg-forest-700 px-[30px] py-[15px] text-[14.5px] font-semibold text-white"
        >
          Register interest →
        </Link>
      </div>
      <div className="relative max-lg:order-1">
        <img loading="lazy"
          src={photoIdu}
          alt="Idu Estate duplexes"
          className="block h-[320px] w-full rounded-[22px] object-cover sm:h-[520px]"
        />
        <div className="absolute top-[18px] left-[18px] rounded-full border border-forest-700/15 bg-white/95 px-4 py-2 text-[11px] font-bold tracking-[0.12em] text-forest-700">
          {idu.badge}
        </div>
        <div className="absolute bottom-[18px] left-[18px] rounded-[14px] bg-forest-950/70 px-5 py-3.5 text-[13px] text-white backdrop-blur-[6px]">
          ⌖ Idu District, Abuja · minutes from the rail line
        </div>
      </div>
    </div>
  </section>
);

export default IduSection;
