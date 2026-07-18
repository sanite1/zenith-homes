import { Building2, Gem, Trees } from "lucide-react";
import { PORTFOLIO_TYPES, type PortfolioType } from "@/data/projects-data";
import { SITE_CONTACT } from "@/data/site-data";
import { cn } from "@/lib/utils";

const ICONS: Record<PortfolioType["icon"], typeof Building2> = {
  apartments: Building2,
  signature: Gem,
  family: Trees,
};

const PortfolioTypesSection = () => (
  <section className="bg-cream-100 px-5 py-16 sm:px-10 lg:px-14 lg:pt-[78px] lg:pb-[84px]">
    <div className="mx-auto max-w-[1168px]">
      <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
        <div>
          <div className="mb-3 text-xs font-bold tracking-[0.26em] text-gold-600">
            OUR PORTFOLIO
          </div>
          <h2 className="text-[clamp(28px,3.5vw,38px)] font-bold text-ink-900">
            Where imagination <span className="text-gold-500">comes home.</span>
          </h2>
        </div>
        <div className="text-[13px] text-[#8a7648]">
          All titles documented · {SITE_CONTACT.rc}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-[22px] md:grid-cols-3">
        {PORTFOLIO_TYPES.map((type) => {
          const Icon = ICONS[type.icon];
          return (
            <article
              key={type.id}
              className={cn(
                "flex flex-col rounded-[22px] p-7 pb-8",
                type.highlight
                  ? "bg-forest-700 text-white shadow-[0_20px_46px_rgba(18,51,23,.28)]"
                  : "border border-gold-500/25 bg-white",
              )}
            >
              <span
                className={cn(
                  "mb-5 flex h-11 w-11 items-center justify-center rounded-full",
                  type.highlight
                    ? "bg-gold-300/[.15] text-gold-300"
                    : "bg-cream-100 text-gold-600",
                )}
              >
                <Icon className="size-5" />
              </span>
              <h3 className="text-[21px] font-bold">{type.title}</h3>
              <p
                className={cn(
                  "mt-2 text-[13.5px] leading-[1.75] italic",
                  type.highlight ? "text-gold-300" : "text-gold-600",
                )}
              >
                {type.intro}
              </p>
              <ul
                className={cn(
                  "mt-4 mb-6 flex flex-1 flex-col gap-2.5 text-[13.5px] leading-[1.6]",
                  type.highlight ? "text-sage-200" : "text-ink-500",
                )}
              >
                {type.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span
                      className={cn(
                        "mt-0.5 text-[12px]",
                        type.highlight ? "text-gold-300" : "text-gold-500",
                      )}
                    >
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={type.liveIt.anchor}
                className={cn(
                  "w-fit border-b-[1.5px] border-gold-400 pb-[3px] text-[12.5px] font-bold",
                  type.highlight ? "text-gold-300" : "text-forest-700",
                )}
              >
                {type.liveIt.label}
              </a>
            </article>
          );
        })}
      </div>
    </div>
  </section>
);

export default PortfolioTypesSection;
