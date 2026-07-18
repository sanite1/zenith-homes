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
          <span className="text-gold-500">Walk our finished rooms.</span>
        </h2>
        <p className="mt-[18px] max-w-[520px] text-[14.5px] leading-[1.85] text-[#6b6353]">
          Every claim on this page survives a site visit. Tour the delivered
          terraces in Guzape or the show apartment in Kado, and judge the
          finishing with your own hands.
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
      <div className="rounded-3xl border border-gold-500/25 bg-white p-8 text-center shadow-[0_18px_44px_rgba(58,47,20,.1)] sm:px-9 sm:py-[38px]">
        <div className="mx-auto mb-[18px] h-[52px] w-[52px] rounded-full bg-[radial-gradient(circle_at_40%_35%,#ffd75e,#e9a91d)] shadow-[0_0_30px_rgba(233,169,29,.6)]" />
        <div className="text-[22px] font-bold text-ink-900">
          This weekend: Guzape & Kado
        </div>
        <div className="mt-2 mb-6 text-[13.5px] text-ink-400">
          Guided visits · 45 minutes · bring the family
        </div>
        <Link
          to="/contact"
          className="inline-block rounded-full bg-forest-700 px-8 py-[15px] text-[14.5px] font-semibold text-white"
        >
          Reserve a slot →
        </Link>
        <div className="mt-3.5 text-[12.5px] text-ink-300">
          or call {SITE_CONTACT.phones[0]}
        </div>
      </div>
    </div>
  </section>
);

export default VisitSection;
