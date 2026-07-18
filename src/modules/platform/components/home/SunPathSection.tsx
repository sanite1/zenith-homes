import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { SUN_PATH_CARDS, HOME_STATS, type SunPathCard } from "@/data/home-data";
import photoExterior from "@/assets/photo-exterior.jpg";
import photoLiving from "@/assets/photo-living.jpg";
import photoIdu from "@/assets/photo-idu.jpg";
import photoJahi from "@/assets/photo-jahi-front.jpg";

const IMAGE_MAP: Record<SunPathCard["image"], string> = {
  jahi: photoJahi,
  exterior: photoExterior,
  living: photoLiving,
  idu: photoIdu,
};

const Badge = ({ card }: { card: SunPathCard }) => (
  <div
    className={cn(
      "absolute top-3 left-3 rounded-full px-[13px] py-1.5 text-[10.5px] font-bold tracking-[0.1em]",
      card.badgeTone === "delivered" && "bg-forest-700/[.92] text-white",
      card.badgeTone === "selling" && "bg-flame-500 text-white",
      card.badgeTone === "rising" &&
        "border border-forest-700/15 bg-white/95 text-forest-700",
    )}
  >
    {card.badge}
  </div>
);

const DistrictCard = ({ card }: { card: SunPathCard }) => (
  <article
    className={cn(
      "overflow-hidden rounded-[18px]",
      card.flagship
        ? "bg-forest-700 shadow-[0_26px_60px_rgba(18,51,23,.35)]"
        : "border border-forest-700/12 bg-white",
    )}
  >
    <div className="relative">
      <img loading="lazy"
        src={IMAGE_MAP[card.image]}
        alt={card.name}
        className="block h-[180px] w-full object-cover"
      />
      <Badge card={card} />
    </div>
    <div className={cn("p-5 pb-5", card.flagship && "text-white")}>
      <h3 className="text-xl font-bold">{card.name}</h3>
      <p
        className={cn(
          "mt-1 text-[13px]",
          card.flagship ? "text-sage-300" : "text-ink-400",
        )}
      >
        {card.blurb}
      </p>
      {card.flagship ? (
        <div className="mt-3.5 flex flex-wrap gap-2.5">
          <Link
            to="/contact"
            className="rounded-full bg-gradient-to-br from-gold-300 to-gold-400 px-[18px] py-2.5 text-[12.5px] font-bold text-forest-700"
          >
            Book a viewing
          </Link>
          <Link
            to="/projects"
            className="rounded-full border border-white/40 px-[18px] py-2.5 text-[12.5px] font-semibold text-white"
          >
            Payment plans
          </Link>
        </div>
      ) : (
        <Link
          to={card.cta.to}
          className="mt-3 inline-block border-b-[1.5px] border-gold-400 pb-[3px] text-[13.5px] font-semibold text-forest-700"
        >
          {card.cta.label}
        </Link>
      )}
    </div>
  </article>
);

const SunPathSection = () => (
  <section className="relative -mt-1 overflow-hidden bg-white px-5 py-16 sm:px-10 lg:px-14 lg:pt-[78px] lg:pb-[70px]">
    <div className="mx-auto max-w-[1168px]">
      <div className="mb-10 flex flex-col gap-6 lg:mb-3.5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="mb-3.5 text-xs font-bold tracking-[0.26em] text-gold-600">
            THE PORTFOLIO · FOLLOW THE SUN
          </div>
          <h2 className="text-[clamp(32px,4vw,48px)] leading-[1.12] font-bold text-ink-900">
            Four districts.
            <br />
            One climb to <span className="text-gold-500 italic">the peak.</span>
          </h2>
        </div>
        <p className="max-w-[360px] pb-1.5 text-[14.5px] leading-[1.8] text-ink-500">
          Every Zenith project is a point on the sun's climb, from first light
          in Guzape to daybreak in Jahi and high noon in Kado. Choose where
          you board.
        </p>
      </div>

      {/* Desktop: the arc rises over the cards. Mobile: the arc becomes a vertical climb rail. */}
      <div className="relative">
        <div className="relative hidden h-[300px] lg:block">
          <div className="absolute inset-x-0 top-[60px] h-[340px] rounded-t-[100%_200%] border-2 border-dashed border-gold-500/50 border-b-transparent" />
          <div className="absolute top-[168px] left-[12.5%] z-[2] h-4 w-4 -translate-x-1/2 rounded-full bg-gold-500" />
          <div className="absolute top-[64px] left-[37.5%] z-[2] h-[52px] w-[52px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_38%_32%,#ffd75e,#e9a91d)] shadow-[0_0_44px_rgba(233,169,29,.85)]" />
          <div className="absolute top-[48px] left-[calc(37.5%+38px)] text-[10.5px] font-bold tracking-[0.26em] text-gold-500">
            THE ZENITH
          </div>
          <div className="absolute top-[92px] left-[62.5%] z-[2] h-4 w-4 -translate-x-1/2 rounded-full bg-gold-500" />
          <div className="absolute top-[168px] left-[87.5%] z-[2] h-4 w-4 -translate-x-1/2 rounded-full border-2 border-gold-500 bg-white" />
          <div className="absolute top-[184px] left-[12.5%] h-[116px] border-l-[1.5px] border-dashed border-gold-500/55" />
          <div className="absolute top-[116px] left-[37.5%] h-[184px] border-l-[1.5px] border-dashed border-gold-500/55" />
          <div className="absolute top-[108px] left-[62.5%] h-[192px] border-l-[1.5px] border-dashed border-gold-500/55" />
          <div className="absolute top-[184px] left-[87.5%] h-[116px] border-l-[1.5px] border-dashed border-gold-500/55" />
        </div>

        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-6 max-lg:mt-2 max-md:border-l-2 max-md:border-dashed max-md:border-gold-500/50 max-md:pl-6">
          {SUN_PATH_CARDS.map((card) => (
            <div key={card.id} className="relative max-md:pt-1">
              <span
                className={cn(
                  "absolute top-8 -left-[31px] z-[2] hidden h-[14px] w-[14px] rounded-full max-md:block",
                  card.flagship
                    ? "bg-[radial-gradient(circle_at_38%_32%,#ffd75e,#e9a91d)] shadow-[0_0_16px_rgba(233,169,29,.85)]"
                    : card.badgeTone === "rising"
                      ? "border-2 border-gold-500 bg-white"
                      : "bg-gold-500",
                )}
              />
              <DistrictCard card={card} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 border-t border-forest-700/12 pt-[26px] sm:grid-cols-3 sm:gap-0 lg:mt-16">
        {HOME_STATS.map((stat, i) => (
          <div
            key={stat.label}
            className={cn(
              "sm:px-9",
              i === 0 && "sm:pr-9 sm:pl-0",
              i < HOME_STATS.length - 1 &&
                "sm:border-r sm:border-forest-700/12",
            )}
          >
            <div
              className={cn(
                "text-[34px] font-bold sm:text-[40px]",
                stat.gold ? "text-gold-500" : "text-forest-700",
              )}
            >
              {stat.value}
            </div>
            <div className="mt-0.5 text-[13.5px] text-ink-500">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SunPathSection;
