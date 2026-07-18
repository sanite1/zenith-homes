import { Link } from "react-router-dom";
import { HOW_WE_BUILD_STEPS } from "@/data/projects-data";

const HowWeBuildSection = () => (
  <section
    id="how-we-build"
    className="relative scroll-mt-24 overflow-hidden bg-forest-800 px-5 py-16 sm:px-6 lg:pt-24 lg:pb-[84px]"
  >
    <div className="absolute -top-[104px] -right-[30%] -left-[30%] h-[186px] rounded-b-[50%] bg-white max-lg:hidden" />
    <div className="relative mx-auto max-w-[1168px]">
      <div className="mb-4 text-center text-xs font-bold tracking-[0.3em] text-gold-300">
        HOW WE BUILD
      </div>
      <h2 className="mx-auto max-w-[700px] text-center text-[clamp(28px,3.5vw,40px)] font-bold text-white">
        Built in the open,{" "}
        <span className="text-gold-300 italic">
          from first block to final key.
        </span>
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:mt-[54px] lg:grid-cols-4">
        {HOW_WE_BUILD_STEPS.map((step) => (
          <article
            key={step.number}
            className="rounded-[18px] border border-sage-200/16 p-6 text-sage-200"
          >
            <div className="mb-9 text-[13px] font-bold text-gold-300">
              {step.number}
            </div>
            <h3 className="mb-2 text-[17px] font-bold text-white">
              {step.title}
            </h3>
            <p className="text-[13px] leading-[1.7] text-sage-500">
              {step.body}
            </p>
          </article>
        ))}
      </div>
      <div className="mt-12 text-center lg:mt-[50px]">
        <Link
          to="/contact?interest=other"
          className="inline-block rounded-full bg-gradient-to-br from-gold-300 to-gold-400 px-[34px] py-4 text-[15px] font-bold text-forest-700"
        >
          Walk a site with us →
        </Link>
      </div>
    </div>
  </section>
);

export default HowWeBuildSection;
