import { Link } from "react-router-dom";
import photoLiving from "@/assets/photo-living.png";

const PromiseSection = () => (
  <section className="mx-auto max-w-[1168px] px-5 pt-10 pb-20 sm:px-6 lg:px-0 lg:pb-[90px]">
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="relative min-h-[320px] overflow-hidden rounded-3xl sm:min-h-[420px]">
        <img
          src={photoLiving}
          alt="Zenith living room"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(8,24,12,0)_40%,rgba(8,24,12,.85))]" />
        <div className="absolute right-[30px] bottom-7 left-[30px] text-white">
          <div className="mb-2.5 text-[11px] font-bold tracking-[0.24em] text-gold-300">
            THE HANDOVER PROMISE
          </div>
          <p className="text-[clamp(20px,2.5vw,26px)] leading-[1.3] font-bold">
            Walked, tested and signed, before you ever get the keys.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex-1 rounded-3xl border border-gold-500/30 bg-cream-100 p-8 lg:px-[34px]">
          <div className="mb-3 text-[11px] font-bold tracking-[0.24em] text-gold-600">
            AFTER-SALES, ALWAYS
          </div>
          <p className="text-[clamp(20px,2.5vw,24px)] leading-[1.3] font-bold text-ink-900">
            Maintenance & care teams on hand, so{" "}
            <span className="text-gold-600 italic">
              your home stays a haven.
            </span>
          </p>
          <div className="mt-5 flex gap-[22px] border-t border-gold-500/30 pt-4 text-[11.5px] font-bold tracking-[0.14em] text-gold-600">
            <span>CHAT</span>
            <span>CALL</span>
            <span>VISIT</span>
            <span>24/7</span>
          </div>
        </div>
        <div className="relative flex-1 overflow-hidden rounded-3xl bg-forest-700 p-8 text-white lg:px-[34px]">
          <div className="absolute -right-10 -bottom-10 h-[170px] w-[170px] rounded-full bg-gold-300/[.14]" />
          <div className="mb-3 text-[11px] font-bold tracking-[0.24em] text-gold-300">
            EVENTS & WORKSHOPS
          </div>
          <p className="text-[clamp(20px,2.5vw,24px)] leading-[1.3] font-bold">
            A calendar that brings neighbours together.
          </p>
          <p className="mt-2.5 text-sm leading-[1.75] text-sage-300">
            Seasonal estate gatherings, kids' days, home-care clinics: the
            Zenith Experience is scheduled, not accidental.
          </p>
        </div>
      </div>
    </div>

    <div className="mt-14 text-center lg:mt-[60px]">
      <div className="font-script text-[clamp(30px,4vw,42px)] text-gold-500">
        We will never stop delivering the highest quality
      </div>
      <div className="mt-2 text-xs font-bold tracking-[0.26em] text-ink-300">
        THE ZENITH TEAM
      </div>
      <Link
        to="/contact"
        className="mt-8 inline-block rounded-full bg-forest-700 px-[34px] py-4 text-[15px] font-semibold text-white"
      >
        Experience it on a site visit →
      </Link>
    </div>
  </section>
);

export default PromiseSection;
