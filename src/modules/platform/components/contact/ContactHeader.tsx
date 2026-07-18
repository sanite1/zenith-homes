const ContactHeader = () => (
  <section className="relative overflow-hidden bg-forest-800 pt-6 pb-28 lg:pb-[120px]">
    <div className="absolute right-[10%] -bottom-[90px] h-[140px] w-[280px] rounded-t-[280px] bg-[linear-gradient(#ffd75e,#e9a91d)] shadow-[0_0_100px_rgba(255,215,94,.5)]" />
    <div className="relative z-[2] mx-auto mt-32 max-w-[1168px] px-5 text-white sm:px-6 lg:mt-40 lg:px-0">
      <div className="mb-[18px] text-xs font-bold tracking-[0.3em] text-gold-300">
        CONTACT
      </div>
      <h1 className="text-[clamp(38px,5vw,62px)] leading-[1.08] font-light">
        Begin{" "}
        <span className="font-bold">
          the climb<span className="text-gold-300">.</span>
        </span>
      </h1>
      <p className="mt-4 max-w-[520px] text-[15px] leading-[1.7] text-white/[.88] sm:text-base">
        Site visits, price lists, payment plans: our doors (and phone lines)
        are wide open.
      </p>
    </div>
  </section>
);

export default ContactHeader;
