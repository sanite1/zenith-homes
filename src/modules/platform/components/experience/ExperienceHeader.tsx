const ExperienceHeader = () => (
  <section className="relative overflow-hidden bg-[linear-gradient(#0c2a12_0%,#123317_46%,#3a5220_72%,#b98a1e_100%)] pt-6 pb-28 lg:pb-[170px]">
    {/* The sun rising out of the header's horizon */}
    <div className="absolute -bottom-[70px] left-1/2 h-[170px] w-[340px] -translate-x-1/2 rounded-t-[340px] bg-[linear-gradient(#ffd75e,#e9a91d)] shadow-[0_0_120px_rgba(255,215,94,.65)]" />
    <div className="relative z-[2] mx-auto mt-32 max-w-[1168px] px-5 text-center text-white sm:px-6 lg:mt-40">
      <div className="mb-[18px] text-xs font-bold tracking-[0.3em] text-gold-300">
        THE ZENITH EXPERIENCE
      </div>
      <h1 className="text-[clamp(38px,5vw,62px)] leading-[1.1] font-light">
        A day lived{" "}
        <span className="font-bold">
          at the peak<span className="text-gold-300">.</span>
        </span>
      </h1>
      <p className="mx-auto mt-5 max-w-[560px] text-[15px] leading-[1.75] text-white/90 sm:text-base">
        What owning a Zenith home actually feels like, followed from first
        light to nightfall.
      </p>
    </div>
  </section>
);

export default ExperienceHeader;
