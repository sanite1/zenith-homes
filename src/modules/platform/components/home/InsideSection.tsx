import { Link } from "react-router-dom";
import { INSIDE_CALLOUTS, INSIDE_FEATURES } from "@/data/home-data";
import photoKitchen from "@/assets/photo-kitchen.jpg";

const calloutPositions = [
  "left-4 top-4 sm:left-[26px] sm:top-[26px]",
  "left-10 top-1/2 sm:left-14 sm:top-[210px]",
  "left-4 bottom-6 sm:left-[26px] sm:bottom-9",
];

const InsideSection = () => (
  <section className="grid grid-cols-1 bg-forest-800 lg:grid-cols-[1.15fr_1fr]">
    <div className="relative min-h-[380px] overflow-hidden sm:min-h-[560px]">
      <img loading="lazy"
        src={photoKitchen}
        alt="Designer kitchen"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {INSIDE_CALLOUTS.map((callout, i) => (
        <div
          key={callout}
          className={`absolute ${calloutPositions[i]} rounded-[14px] bg-white/[.94] px-4 py-3 text-[12px] font-semibold text-forest-700 shadow-[0_10px_30px_rgba(8,24,12,.25)] backdrop-blur-[4px] sm:px-[18px] sm:py-[13px] sm:text-[13px]`}
        >
          ◔ {callout}
        </div>
      ))}
    </div>
    <div className="px-5 py-14 text-white sm:px-10 lg:px-16 lg:py-[74px]">
      <div className="mb-4 text-xs font-bold tracking-[0.26em] text-gold-300">
        INSIDE A ZENITH HOME
      </div>
      <h2 className="text-[clamp(28px,3.5vw,40px)] leading-[1.18] font-bold">
        Not brick and mortar,{" "}
        <span className="text-gold-300 italic">
          a masterpiece that nurtures the lives within.
        </span>
      </h2>
      <p className="my-6 text-[15px] leading-[1.85] text-sage-300 lg:mt-[22px] lg:mb-[30px]">
        Open plans drawn around natural light. Panoramic windows for every
        sunrise. Premium fixtures, private balconies, and finishes we sign our
        name to.
      </p>
      <ul className="flex flex-col gap-3.5 text-[14.5px]">
        {INSIDE_FEATURES.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <span className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full bg-gold-300/[.18] text-[13px] text-gold-300">
              ✓
            </span>
            {feature}
          </li>
        ))}
      </ul>
      <Link
        to="/projects"
        className="mt-9 inline-block rounded-full bg-gradient-to-br from-gold-300 to-gold-400 px-[30px] py-3.5 text-[14.5px] font-bold text-forest-700"
      >
        Tour a finished home →
      </Link>
    </div>
  </section>
);

export default InsideSection;
