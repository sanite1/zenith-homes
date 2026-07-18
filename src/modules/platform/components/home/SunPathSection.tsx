import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { SUN_PATH_CARDS, HOME_STATS, type SunPathCard } from "@/data/home-data";
import photoExterior from "@/assets/photo-exterior.jpg";
import photoKado from "@/assets/photo-kado-front.jpg";
import photoIdu from "@/assets/photo-idu-estate.jpg";
import photoJahi from "@/assets/photo-jahi-front.jpg";

const IMAGE_MAP: Record<SunPathCard["image"], string> = {
  jahi: photoJahi,
  exterior: photoExterior,
  kado: photoKado,
  idu: photoIdu,
};

// The cards climb the arc: each is staggered at its sun-height.
// Guzape sits in the risen morning, Jahi at daybreak, Kado at the zenith
// (the peak of the climb), Idu waiting on the horizon.
const STAGGER: Record<string, string> = {
  guzape: "lg:translate-y-[130px]",
  jahi: "lg:translate-y-[60px]",
  kado: "lg:translate-y-0",
  idu: "lg:translate-y-[150px]",
};

// Each project's sun, notched into the top of its card.
const SunMedallion = ({ id }: { id: string }) => (
  <div className="absolute -top-7 left-1/2 z-[3] hidden h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-white shadow-[0_10px_26px_rgba(58,47,20,.18)] ring-1 ring-gold-500/30 lg:flex">
    {id === "guzape" && <span className="h-4 w-4 rounded-full bg-gold-500" />}
    {id === "jahi" && (
      <span className="relative flex h-full w-full items-end justify-center overflow-hidden rounded-full pb-[17px]">
        <span className="absolute inset-x-2 bottom-[17px] border-b border-gold-500/40" />
        <span className="h-3 w-6 rounded-t-full bg-gradient-to-b from-gold-300 to-gold-400 shadow-[0_0_16px_rgba(255,215,94,.9)]" />
      </span>
    )}
    {id === "kado" && (
      <span className="h-7 w-7 rounded-full bg-[radial-gradient(circle_at_38%_32%,#ffd75e,#e9a91d)] shadow-[0_0_24px_rgba(233,169,29,.9)]" />
    )}
    {id === "idu" && (
      <span className="h-4 w-4 rounded-full border-2 border-gold-500 bg-white" />
    )}
  </div>
);

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
      "relative flex h-full flex-col overflow-hidden rounded-[18px]",
      card.flagship
        ? "bg-forest-700 shadow-[0_26px_60px_rgba(18,51,23,.35)] ring-1 ring-gold-400/40"
        : "border border-forest-700/12 bg-white",
    )}
  >
    <div className="relative">
      <img
        loading="lazy"
        src={IMAGE_MAP[card.image]}
        alt={card.name}
        className="block h-[180px] w-full object-cover"
      />
      <Badge card={card} />
    </div>
    <div
      className={cn(
        "flex flex-1 flex-col p-5 pb-5",
        card.flagship && "text-white",
      )}
    >
      <h3 className="text-xl font-bold">{card.name}</h3>
      <p
        className={cn(
          "mt-1 flex-1 text-[13px]",
          card.flagship ? "text-sage-300" : "text-ink-400",
        )}
      >
        {card.blurb}
      </p>
      {card.flagship ? (
        <div className="mt-3.5 flex flex-wrap gap-2.5">
          <Link
            to="/contact"
            className="rounded-full bg-gradient-to-br from-gold-300 to-gold-400 px-4 py-2.5 text-[12px] font-bold text-forest-700"
          >
            Book a viewing
          </Link>
          <Link
            to="/projects"
            className="rounded-full border border-white/40 px-4 py-2.5 text-[12px] font-semibold text-white"
          >
            Payment plans
          </Link>
        </div>
      ) : (
        <Link
          to={card.cta.to}
          className="mt-3 inline-block w-fit border-b-[1.5px] border-gold-400 pb-[3px] text-[13.5px] font-semibold text-forest-700"
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
      <div className="mb-10 flex flex-col gap-6 lg:mb-6 lg:flex-row lg:items-end lg:justify-between">
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

      <div className="relative lg:pt-24">
        {/* The dashed sun path, threading through each card's medallion */}
        <svg
          viewBox="0 0 1168 320"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
          className="pointer-events-none absolute top-8 left-0 hidden h-[320px] w-full lg:block"
        >
          <path
            d="M -30 290 Q 60 228 146 208 Q 290 172 438 138 Q 600 84 730 78 Q 880 86 1022 228 Q 1080 282 1198 334"
            stroke="#c8901a"
            strokeOpacity=".45"
            strokeWidth="2"
            strokeDasharray="2 9"
            strokeLinecap="round"
          />
        </svg>

        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-5 lg:mb-[170px] lg:grid-cols-4 lg:gap-6 max-md:border-l-2 max-md:border-dashed max-md:border-gold-500/50 max-md:pl-6">
          {SUN_PATH_CARDS.map((card) => (
            <div
              key={card.id}
              className={cn(
                "relative transition-transform max-md:pt-1",
                STAGGER[card.id],
              )}
            >
              {card.id === "kado" && (
                <span className="absolute -top-[52px] left-1/2 hidden -translate-x-1/2 text-[10.5px] font-bold tracking-[0.26em] whitespace-nowrap text-gold-500 lg:block">
                  THE ZENITH
                </span>
              )}
              <SunMedallion id={card.id} />
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
