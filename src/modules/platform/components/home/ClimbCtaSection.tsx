import { Link } from "react-router-dom";
import { SITE_CONTACT } from "@/data/site-data";

const ClimbCtaSection = () => (
  <section className="bg-white px-4 py-16 sm:px-10 lg:px-14 lg:py-[84px]">
    <div className="relative mx-auto max-w-[1168px] overflow-hidden rounded-[28px] bg-[radial-gradient(900px_500px_at_78%_120%,#1d5227_0%,#123317_55%,#0c2a12_100%)] p-7 sm:p-12 lg:px-[60px] lg:py-[66px]">
      <div className="absolute -top-[70px] -right-[70px] h-[280px] w-[280px] rounded-full border border-gold-300/25" />
      <div className="absolute -top-[30px] -right-[30px] h-[200px] w-[200px] rounded-full border border-gold-300/35" />

      <div className="max-w-[600px] text-white">
        <div className="mb-[18px] text-xs font-bold tracking-[0.28em] text-gold-300">
          BEGIN THE CLIMB
        </div>
        <h2 className="text-[clamp(30px,4vw,46px)] leading-[1.12] font-bold">
          The peak is closer
          <br />
          than you think<span className="text-gold-300">.</span>
        </h2>
        <p className="mt-[18px] mb-8 text-[15px] leading-[1.8] text-sage-300">
          Own outright or spread payments in structured instalments. Our team
          walks you from first visit to final key. Transparent terms, no
          surprises.
        </p>
        <div className="flex flex-col gap-3.5 sm:flex-row">
          <Link
            to="/contact"
            className="rounded-full bg-gradient-to-br from-gold-300 to-gold-400 px-8 py-4 text-center text-[15px] font-bold text-forest-700"
          >
            Book a site visit →
          </Link>
          <Link
            to="/contact"
            className="rounded-full border-[1.5px] border-white/50 px-8 py-4 text-center text-[15px] font-semibold text-white"
          >
            Talk to our team
          </Link>
        </div>
        <div className="mt-[22px] text-[12.5px] text-sage-500">
          Verified buyers only · documented titles · {SITE_CONTACT.rc}
        </div>
      </div>

      {/* Floating payment-plan card: pinned right at desktop, in flow below on small screens */}
      <div className="mt-10 w-full max-w-[250px] rounded-[18px] bg-white px-7 py-6 shadow-[0_26px_60px_rgba(6,16,9,.4)] lg:absolute lg:top-16 lg:right-[60px] lg:mt-0">
        <div className="text-[10.5px] font-bold tracking-[0.22em] text-gold-600">
          PAYMENT PLANS
        </div>
        <div className="mt-2 text-[42px] font-bold text-ink-900">
          2{" "}
          <span className="text-base font-semibold text-ink-500">
            ways to own
          </span>
        </div>
        <div className="my-3 h-0.5 w-14 bg-gold-400" />
        <p className="text-[13px] leading-[1.8] text-ink-500">
          Outright purchase, or structured instalments as you build toward the
          keys.
        </p>
      </div>

      <div className="mt-6 flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-white backdrop-blur-[4px] lg:absolute lg:right-[60px] lg:bottom-11 lg:mt-0 lg:w-auto">
        <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-300 to-gold-400 text-sm text-forest-700">
          ★
        </span>
        <span className="text-[13px]">
          <b>Viewings this weekend</b> · Guzape & Kado
        </span>
      </div>
    </div>
  </section>
);

export default ClimbCtaSection;
