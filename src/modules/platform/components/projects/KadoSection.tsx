import { Link } from "react-router-dom";
import { PROJECT_CHAPTERS } from "@/data/projects-data";
import photoKadoFront from "@/assets/photo-kado-front.jpg";
import photoKadoAngle from "@/assets/photo-kado-angle.jpg";

const kado = PROJECT_CHAPTERS.find((c) => c.id === "kado")!;

const KadoSection = () => (
  <section
    id="kado"
    className="mt-10 scroll-mt-24 bg-[linear-gradient(#fff,#fbf3e3_18%,#fbf3e3_82%,#fff)] px-4 py-[70px] sm:px-6"
  >
    <div className="mx-auto max-w-[1168px]">
      <div className="grid grid-cols-1 overflow-hidden rounded-[28px] bg-forest-700 lg:grid-cols-[1fr_1.1fr]">
        <div className="relative p-7 text-white sm:p-12 lg:px-[52px] lg:py-[58px]">
          <div className="absolute top-0 left-7 h-9 w-px bg-[linear-gradient(rgba(255,215,94,.8),transparent)] sm:left-[52px]" />
          <div className="mb-[18px] flex items-center gap-4">
            <div className="relative h-12 w-[88px] border-b-2 border-gold-300/70">
              <span className="absolute -top-1 left-1/2 h-[22px] w-[22px] -translate-x-1/2 rounded-full bg-gold-300 shadow-[0_0_16px_rgba(255,215,94,.9)]" />
              <span className="absolute top-[34px] left-0 text-[9.5px] font-bold tracking-[0.18em] text-gold-300">
                {kado.sunLabel}
              </span>
            </div>
            <div className="text-xs font-bold tracking-[0.2em] text-gold-300">
              {kado.chapter}
            </div>
          </div>
          <div className="mb-[18px] inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-gold-300 to-gold-400 px-[15px] py-[7px] text-[11px] font-bold tracking-[0.12em] text-forest-800">
            <span className="h-[7px] w-[7px] rounded-full bg-forest-800" />
            {kado.badge}
          </div>
          <h2 className="text-[clamp(32px,4vw,44px)] leading-[1.1] font-bold">
            {kado.name}
          </h2>
          <div className="mt-2 text-[17px] font-semibold text-gold-300 italic">
            {kado.tagline}
          </div>
          <p className="my-5 text-[15px] leading-[1.85] text-sage-300 lg:mb-[26px]">
            {kado.description}
          </p>
          <div className="mb-7 flex flex-wrap gap-2.5">
            {kado.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/30 px-4 py-2 text-[12.5px] text-sage-200"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <a
              href="#jahi"
              className="rounded-full bg-gradient-to-br from-gold-300 to-gold-400 px-[30px] py-[15px] text-center text-[14.5px] font-bold text-forest-700"
            >
              See what's selling in Jahi →
            </a>
            <Link
              to="/contact?interest=kado"
              className="rounded-full border-[1.5px] border-white/45 px-[30px] py-[15px] text-center text-[14.5px] font-semibold text-white"
            >
              Enquire about homes like this
            </Link>
          </div>
        </div>
        <div className="relative min-h-[400px] lg:min-h-[620px]">
          <img loading="lazy"
            src={photoKadoFront}
            alt="Kado Homes street elevation"
            className="absolute inset-x-0 top-0 h-[58%] w-full object-cover"
          />
          <img loading="lazy"
            src={photoKadoAngle}
            alt="Kado Homes corner view"
            className="absolute inset-x-0 bottom-0 h-[42%] w-full object-cover"
          />
          <div className="absolute top-[22px] right-[22px] rounded-[14px] bg-white/[.94] px-[18px] py-3 text-[12.5px] font-bold text-forest-700 shadow-[0_12px_30px_rgba(8,24,12,.3)]">
            ◔ Artist's impression · Kado Homes
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default KadoSection;
