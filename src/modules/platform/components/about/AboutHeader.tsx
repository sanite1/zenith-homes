const AboutHeader = () => (
  <section className="relative overflow-hidden bg-forest-800 pt-6 pb-24 lg:pb-[130px]">
    <div className="absolute -bottom-40 -left-[120px] h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle_at_42%_36%,rgba(255,215,94,.4),rgba(233,169,29,.1)_68%,transparent_70%)]" />
    <div className="relative z-[2] mx-auto mt-32 max-w-[1168px] px-5 text-white sm:px-6 lg:mt-[164px] lg:px-0">
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
    </div>
  </section>
);

export default AboutHeader;
