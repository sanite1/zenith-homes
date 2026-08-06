import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { INSIDE_CALLOUTS, INSIDE_FEATURES } from "@/data/home-data";
import interior1 from "@/assets/photo-interior-1.jpg";
import interior2 from "@/assets/photo-interior-2.jpg";
import interior3 from "@/assets/photo-interior-3.jpg";
import interior4 from "@/assets/photo-interior-4.jpg";
import interior5 from "@/assets/photo-interior-5.jpg";
import interior6 from "@/assets/photo-interior-6.jpg";
import interior7 from "@/assets/photo-interior-7.jpg";

const INTERIOR_SLIDES = [
  interior1,
  interior2,
  interior3,
  interior4,
  interior5,
  interior6,
  interior7,
];

const SLIDE_MS = 5000;

const calloutPositions = [
  "left-4 top-4 sm:left-[26px] sm:top-[26px]",
  "left-10 top-1/2 sm:left-14 sm:top-[210px]",
  "left-4 bottom-6 sm:left-[26px] sm:bottom-9",
];

const InsideSection = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setSlide((s) => (s + 1) % INTERIOR_SLIDES.length),
      SLIDE_MS,
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative z-[5] grid grid-cols-1 overflow-hidden bg-forest-800 lg:grid-cols-[1.15fr_1fr]">
      <div className="relative min-h-[300px] overflow-hidden sm:min-h-[560px]">
        {INTERIOR_SLIDES.map((src, i) => (
          <img
            key={src}
            loading="lazy" decoding="async"
            src={src}
            alt={i === slide ? "Inside a finished Zenith home" : ""}
            aria-hidden={i !== slide}
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms]",
              i === slide ? "opacity-100" : "opacity-0",
            )}
          />
        ))}
        {/* Desktop: callouts scattered over the photos */}
        {INSIDE_CALLOUTS.map((callout, i) => (
          <div
            key={callout}
            className={`absolute ${calloutPositions[i]} hidden rounded-[14px] bg-white/[.94] px-[18px] py-[13px] text-[13px] font-semibold text-forest-700 shadow-[0_10px_30px_rgba(8,24,12,.25)] backdrop-blur-[4px] sm:block`}
          >
            ◔ {callout}
          </div>
        ))}
        {/* Slide dots */}
        <div className="absolute right-4 bottom-4 flex gap-1.5 sm:right-6 sm:bottom-6 lg:bottom-[110px]">
          {INTERIOR_SLIDES.map((src, i) => (
            <span
              key={src}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                i === slide ? "w-5 bg-gold-300" : "w-1.5 bg-white/60",
              )}
            />
          ))}
        </div>
      </div>
      <div className="px-5 py-14 text-white sm:px-10 lg:px-16 lg:pt-[74px] lg:pb-[110px]">
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
          sunrise. Premium fixtures, private balconies, and finishes we sign
          our name to.
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
          to="/projects#jahi"
          className="mt-9 inline-block rounded-full bg-gradient-to-br from-gold-300 to-gold-400 px-[30px] py-3.5 text-[14.5px] font-bold text-forest-700"
        >
          See homes for sale →
        </Link>
      </div>

      {/* The next section's cream horizon rising over the photos: the
          carousel touches the curved edge itself, like the home hero. */}
      <div className="absolute -right-[30%] -bottom-24 -left-[30%] z-[4] h-[200px] rounded-t-[50%] bg-cream-50 max-lg:hidden" />
    </section>
  );
};

export default InsideSection;
