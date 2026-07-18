import { Link } from "react-router-dom";
import { ACHIEVEMENTS } from "@/data/about-data";
import { SITE_CONTACT } from "@/data/site-data";

const JoinSection = () => (
  <section className="relative overflow-hidden bg-forest-800 px-5 py-16 sm:px-6 lg:pt-24 lg:pb-[90px]">
    <div className="absolute -top-[104px] -right-[30%] -left-[30%] h-[186px] rounded-b-[50%] bg-white max-lg:hidden" />
    <div className="relative mx-auto grid max-w-[1168px] grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
      <div className="text-white">
        <div className="mb-4 text-xs font-bold tracking-[0.3em] text-gold-300">
          A YOUNG COMPANY, CLIMBING FAST
        </div>
        <h2 className="text-[clamp(28px,3.5vw,40px)] leading-[1.15] font-bold">
          Trust earned the hard way,{" "}
          <span className="text-gold-300 italic">by delivering.</span>
        </h2>
        <ul className="mt-[30px] flex flex-col gap-4 text-[14.5px] text-sage-200">
          {ACHIEVEMENTS.map((achievement) => (
            <li key={achievement} className="flex items-start gap-3">
              <span className="mt-0.5 text-gold-300">✓</span>
              {achievement}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-[26px] border border-gold-300/30 bg-white/[.06] p-8 text-center text-white sm:px-10 sm:py-[42px]">
        <div className="font-script text-[clamp(34px,4vw,44px)] leading-[1.2] text-gold-300">
          Join our journey
        </div>
        <p className="my-4 mb-7 text-[14.5px] leading-[1.8] text-sage-300">
          Be part of a story written in vibrant colors, rich textures and
          boundless dreams. Your perfect space awaits.
        </p>
        <Link
          to="/contact"
          className="inline-block rounded-full bg-gradient-to-br from-gold-300 to-gold-400 px-[34px] py-4 text-[15px] font-bold text-forest-700"
        >
          Start the conversation →
        </Link>
        <div className="mt-[18px] text-xs text-sage-500">
          {SITE_CONTACT.emails[0]} · {SITE_CONTACT.phones[0]}
        </div>
      </div>
    </div>
  </section>
);

export default JoinSection;
