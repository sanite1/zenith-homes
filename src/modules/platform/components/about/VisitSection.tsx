import { Link } from "react-router-dom";
import { SITE_CONTACT } from "@/data/site-data";

const visitChips = [
  "MON TO SAT · 9AM TO 5PM",
  "⌖ NO 2 UBIAJA CRESCENT, GARKI",
  "SITE VISITS BY APPOINTMENT",
];

const VisitSection = () => (
  <section className="bg-cream-100 px-5 py-16 sm:px-10 lg:px-14 lg:pt-[78px] lg:pb-[84px]">
    <div className="mx-auto grid max-w-[1168px] grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
      <div>
        <div className="mb-3 text-xs font-bold tracking-[0.26em] text-gold-600">
          COME SEE FOR YOURSELF
        </div>
        <h2 className="text-[clamp(28px,3.5vw,38px)] leading-[1.15] font-bold text-ink-900">
          Words are easy.{" "}
          <span className="text-gold-500">Inspect the site yourself.</span>
        </h2>
        <p className="mt-[18px] max-w-[520px] text-[14.5px] leading-[1.85] text-[#6b6353]">
          Every claim on this page survives an inspection. Book a site visit
          to The Dream Home in Jahi or Kado Homes, both selling now, and judge
          the build quality with your own eyes.
        </p>
        <div className="mt-[26px] flex flex-wrap gap-2.5">
          {visitChips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-gold-500/30 bg-white px-[18px] py-2.5 text-[12.5px] font-semibold text-[#5a5340]"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
      <div className="rounded-3xl border border-gold-500/25 bg-white p-7 shadow-[0_18px_44px_rgba(58,47,20,.1)] sm:px-9 sm:py-[34px]">
        <div className="mb-1 text-[11px] font-bold tracking-[0.24em] text-gold-600">
          PLAN YOUR VISIT
        </div>
        <div className="text-[22px] font-bold text-ink-900">
          Your tour, your pace.
        </div>
        <div className="mt-5 flex flex-col gap-4">
          {[
            {
              step: "01",
              title: "Choose a project",
              detail: "Jahi or Kado, both now selling",
            },
            {
              step: "02",
              title: "Pick a day that suits you",
              detail: "Mon to Sat · 9am to 5pm",
            },
            {
              step: "03",
              title: "Walk the rooms with our team",
              detail: "Private and guided, at your pace",
            },
          ].map((item) => (
            <div key={item.step} className="flex items-start gap-3.5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream-100 text-[11px] font-bold text-gold-600">
                {item.step}
              </span>
              <div>
                <div className="text-[14.5px] font-semibold text-ink-900">
                  {item.title}
                </div>
                <div className="text-[12.5px] text-ink-400">{item.detail}</div>
              </div>
            </div>
          ))}
        </div>
        <Link
          to="/contact?interest=other"
          className="mt-6 block rounded-full bg-forest-700 px-8 py-[15px] text-center text-[14.5px] font-semibold text-white"
        >
          Book a private tour →
        </Link>
        <div className="mt-3.5 text-center text-[12.5px] text-ink-300">
          or call {SITE_CONTACT.phones[0]}
        </div>
      </div>
    </div>
  </section>
);

export default VisitSection;
