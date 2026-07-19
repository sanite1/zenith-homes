import { ABOUT_STATS } from "@/data/about-data";
import { SITE_CONTACT } from "@/data/site-data";
import { cn } from "@/lib/utils";
import photoIdu from "@/assets/photo-idu-garden.jpg";

const StorySection = () => (
  <section className="mx-auto max-w-[1168px] px-5 pt-16 pb-10 sm:px-6 lg:px-0 lg:pt-[76px]">
    <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-[1fr_1.1fr]">
      <div className="relative">
        <img loading="lazy"
          src={photoIdu}
          alt="Zenith duplex, Idu"
          className="block h-[300px] w-full rounded-[22px] object-cover sm:h-[440px]"
        />
        <div className="absolute -bottom-[26px] left-0 rounded-2xl bg-forest-700 px-6 py-[18px] text-white shadow-[0_18px_44px_rgba(18,51,23,.35)]">
          <div className="text-[10.5px] font-bold tracking-[0.22em] text-gold-300">
            INCORPORATED
          </div>
          <div className="mt-1 text-lg font-bold sm:text-2xl">
            {SITE_CONTACT.rc} · Abuja
          </div>
        </div>
      </div>
      <div className="max-lg:pt-10">
        <div className="mb-3.5 text-xs font-bold tracking-[0.26em] text-gold-600">
          OUR STORY
        </div>
        <h2 className="text-[clamp(28px,3.5vw,40px)] leading-[1.15] font-bold text-ink-900">
          Born from a simple belief:{" "}
          <span className="text-gold-500 italic">
            a home should never be ordinary.
          </span>
        </h2>
        <p className="mt-[22px] text-[15px] leading-[1.9] text-ink-500">
          Zenith Homes And Apartments was founded at the intersection of
          innovation, luxury and trust, with a promise that every space we
          build is not brick and mortar, but a masterpiece carefully designed
          to inspire and nurture the lives within. From our first terraces in
          Guzape to the Jahi Zenith Homes Terrace rising today and the estates
          coming up in Idu and Kado, we build for families who measure a home
          in decades, not transactions.
        </p>
        <div className="mt-8 grid grid-cols-3 border-t border-forest-700/12 pt-[26px] sm:flex sm:gap-10">
          {ABOUT_STATS.map((stat) => (
            <div key={stat.label} className="max-sm:px-1 max-sm:text-center">
              <div
                className={cn(
                  "text-[24px] font-bold sm:text-[32px]",
                  stat.gold ? "text-gold-500" : "text-forest-700",
                )}
              >
                {stat.value}
              </div>
              <div className="mt-0.5 text-[11px] leading-snug text-ink-400 sm:text-[12.5px]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default StorySection;
