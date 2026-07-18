import { DISTRICT_CARDS } from "@/data/contact-data";
import { cn } from "@/lib/utils";

const DistrictsStrip = () => (
  <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
    {DISTRICT_CARDS.map((card) => {
      const flagship = card.tone === "selling";
      return (
        <article
          key={card.id}
          className={cn(
            "rounded-[20px] px-7 py-[26px]",
            flagship
              ? "bg-forest-700 text-white shadow-[0_18px_44px_rgba(18,51,23,.3)]"
              : "border border-forest-700/12",
          )}
        >
          <div className="mb-3.5 flex items-center justify-between">
            <span
              className={cn(
                "text-[11px] font-bold tracking-[0.2em]",
                flagship ? "text-gold-300" : "text-gold-600",
              )}
            >
              {card.district}
            </span>
            {flagship ? (
              <span className="h-4 w-4 rounded-full bg-[radial-gradient(circle_at_40%_35%,#ffd75e,#e9a91d)] shadow-[0_0_12px_rgba(255,215,94,.9)]" />
            ) : card.tone === "rising" ? (
              <span className="box-border h-3.5 w-3.5 rounded-full border-2 border-gold-500 bg-white" />
            ) : (
              <span className="h-3.5 w-3.5 rounded-full bg-gold-500" />
            )}
          </div>
          <h3 className="text-lg font-bold">{card.title}</h3>
          <p
            className={cn(
              "mt-1 text-[13px]",
              flagship ? "text-sage-300" : "text-ink-400",
            )}
          >
            {card.blurb}
          </p>
        </article>
      );
    })}
  </div>
);

export default DistrictsStrip;
