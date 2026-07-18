import { Link } from "react-router-dom";
import { PROJECT_CHAPTERS } from "@/data/projects-data";
import { SITE_CONTACT } from "@/data/site-data";
import { cn } from "@/lib/utils";

const AtAGlanceSection = () => (
  <section className="bg-cream-100 px-5 py-16 sm:px-10 lg:px-14 lg:pt-[78px] lg:pb-[84px]">
    <div className="mx-auto max-w-[1168px]">
      <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <div className="mb-3 text-xs font-bold tracking-[0.26em] text-gold-600">
            AT A GLANCE
          </div>
          <h2 className="text-[clamp(28px,3.5vw,38px)] font-bold text-ink-900">
            Choose your <span className="text-gold-500">chapter.</span>
          </h2>
        </div>
        <div className="text-[13px] text-[#8a7648]">
          All titles documented · {SITE_CONTACT.rc}
        </div>
      </div>
      <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
        {PROJECT_CHAPTERS.map((chapter) => {
          const flagship = chapter.flagship;
          return (
            <article
              key={chapter.id}
              className={cn(
                "rounded-[20px] p-7",
                flagship
                  ? "bg-forest-700 text-white shadow-[0_20px_46px_rgba(18,51,23,.28)]"
                  : "border border-gold-500/25 bg-white",
              )}
            >
              <div className="mb-4 flex items-center justify-between">
                <span
                  className={cn(
                    "text-[11px] font-bold tracking-[0.2em]",
                    flagship ? "text-gold-300" : "text-gold-600",
                  )}
                >
                  {chapter.glance.heading}
                </span>
                {flagship ? (
                  <span className="h-4 w-4 rounded-full bg-[radial-gradient(circle_at_40%_35%,#ffd75e,#e9a91d)] shadow-[0_0_12px_rgba(255,215,94,.9)]" />
                ) : chapter.id === "idu" ? (
                  <span className="box-border h-3.5 w-3.5 rounded-full border-2 border-gold-500 bg-white" />
                ) : (
                  <span className="h-3.5 w-3.5 rounded-full bg-gold-500" />
                )}
              </div>
              <h3 className="text-[19px] font-bold">{chapter.name}</h3>
              <p
                className={cn(
                  "mt-1.5 mb-[18px] text-[13.5px] leading-[1.7]",
                  flagship ? "text-sage-300" : "text-[#6b6353]",
                )}
              >
                {chapter.glance.blurb}
              </p>
              {flagship ? (
                <Link
                  to="/contact"
                  className="inline-block rounded-full bg-gradient-to-br from-gold-300 to-gold-400 px-5 py-[11px] text-[12.5px] font-bold text-forest-700"
                >
                  {chapter.glance.ctaLabel}
                </Link>
              ) : (
                <Link
                  to="/contact"
                  className="border-b-[1.5px] border-gold-400 pb-[3px] text-[13px] font-bold text-forest-700"
                >
                  {chapter.glance.ctaLabel}
                </Link>
              )}
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default AtAGlanceSection;
