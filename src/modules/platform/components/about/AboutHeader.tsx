import { Lightbulb, Gem, ShieldCheck } from "lucide-react";

// The profile's founding line, made literal: the intersection Zenith builds at.
const IDENTITY_CARDS = [
  {
    icon: Lightbulb,
    title: "Innovation",
    body: "Cutting-edge technology in harmony with natural elements.",
  },
  {
    icon: Gem,
    title: "Luxury",
    body: "Every detail breathes comfort, elegance and distinction.",
  },
  {
    icon: ShieldCheck,
    title: "Trust",
    body: "An unwavering commitment to the families we build for.",
  },
];

const AboutHeader = () => (
  <div className="relative">
    <section className="relative overflow-hidden bg-forest-800 pt-6 pb-24 lg:pb-32">
      <div className="absolute -bottom-40 -left-[120px] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle_at_42%_36%,rgba(255,215,94,.4),rgba(233,169,29,.1)_68%,transparent_70%)]" />
      <div className="absolute -top-[120px] -right-[120px] h-[380px] w-[380px] rounded-full border border-dashed border-gold-300/25" />
      <div className="absolute top-10 right-[14%] h-2 w-2 rounded-full bg-gold-300/70 shadow-[0_0_12px_rgba(255,215,94,.8)] max-lg:hidden" />

      <div className="relative z-[2] mx-auto mt-32 max-w-[1168px] px-5 text-white sm:px-6 lg:mt-36 lg:px-0">
        <div className="mb-[18px] text-xs font-bold tracking-[0.3em] text-gold-300">
          ABOUT ZENITH
        </div>
        <h1 className="max-w-[860px] text-[clamp(38px,5vw,62px)] leading-[1.08] font-light">
          Foundations of{" "}
          <span className="font-bold">
            excellence,{" "}
            <span className="text-gold-300 italic">a future of dreams.</span>
          </span>
        </h1>
        <p className="mt-6 max-w-[560px] text-[14.5px] leading-[1.85] text-sage-300">
          More than a real estate company: a vibrant promise of elevated
          living, where dreams are drawn in the boldest colors and every
          detail breathes comfort, elegance and distinction.
        </p>
      </div>
    </section>

    {/* The intersection we build at, cutting out of the header.
        Mobile: three compact icon chips in a row; larger screens add the body copy. */}
    <div className="relative z-10 mx-auto -mt-12 grid max-w-[1168px] grid-cols-3 gap-2.5 px-4 sm:gap-3.5 sm:px-6 lg:-mt-14 lg:gap-4 lg:px-0">
      {IDENTITY_CARDS.map((card) => (
        <div
          key={card.title}
          className="flex flex-col items-center gap-2.5 rounded-2xl bg-white p-4 text-center shadow-[0_18px_44px_rgba(8,24,12,.16)] ring-1 ring-forest-700/[.06] sm:flex-row sm:items-start sm:gap-4 sm:p-5 sm:text-left"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream-100 text-gold-600">
            <card.icon className="size-[18px]" />
          </span>
          <div>
            <div className="text-[13px] font-bold text-ink-900 sm:text-[15px]">
              {card.title}
            </div>
            <p className="mt-1 hidden text-[12.5px] leading-[1.65] text-ink-500 sm:block">
              {card.body}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default AboutHeader;
