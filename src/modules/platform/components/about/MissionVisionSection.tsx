const MissionVisionSection = () => (
  <section className="mx-auto max-w-[1168px] px-5 pt-16 pb-[30px] sm:px-6 lg:px-0 lg:pt-[70px]">
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="relative overflow-hidden rounded-[26px] bg-[linear-gradient(160deg,#fdf4dd,#f6e3ba)] p-8 sm:px-[42px] sm:py-11">
        <div className="absolute -top-[50px] -right-[50px] h-[190px] w-[190px] rounded-full bg-[radial-gradient(circle_at_40%_35%,#ffd75e,#e9a91d)] opacity-50" />
        <div className="mb-4 text-[11px] font-bold tracking-[0.26em] text-gold-600">
          OUR MISSION · THE DAY'S WORK
        </div>
        <p className="text-[clamp(19px,2.5vw,24px)] leading-[1.55] font-semibold text-[#3a2f14]">
          To create extraordinary residential spaces that blend contemporary
          design with timeless comfort, serving diverse communities and
          fostering lasting value.
        </p>
      </div>
      <div className="relative overflow-hidden rounded-[26px] bg-forest-800 p-8 text-white sm:px-[42px] sm:py-11">
        <div className="absolute top-6 right-6 text-sm tracking-[6px] text-gold-300/80">
          ✦ ✦ ✦
        </div>
        <div className="mb-4 text-[11px] font-bold tracking-[0.26em] text-gold-300">
          OUR VISION · THE NORTH STAR
        </div>
        <p className="text-[clamp(19px,2.5vw,24px)] leading-[1.55] font-semibold text-[#f6ecd2]">
          To be the leading name in luxurious, sustainable, people-centered
          housing: communities where every resident finds belonging, beauty
          and peace of mind.
        </p>
      </div>
    </div>
  </section>
);

export default MissionVisionSection;
