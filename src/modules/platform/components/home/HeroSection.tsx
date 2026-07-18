import { Link } from "react-router-dom";
import photoIdu from "@/assets/photo-idu.png";

const pillCells = [
  { label: "DISTRICT", value: "Guzape · Idu · Kado" },
  { label: "HOME TYPE", value: "Terrace, Apartment..." },
  { label: "STATUS", value: "Now selling" },
];

const HeroSection = () => (
  <section className="relative overflow-hidden bg-forest-800 pb-40 lg:h-[780px] lg:pb-0">
    <img
      src={photoIdu}
      alt="Zenith family homes, Idu Abuja"
      className="absolute inset-0 h-full w-full object-cover object-[50%_42%]"
    />
    <div className="absolute inset-0 bg-[linear-gradient(102deg,rgba(8,24,12,.82)_0%,rgba(8,24,12,.55)_34%,rgba(8,24,12,.12)_60%,rgba(8,24,12,0)_76%),linear-gradient(rgba(8,24,12,.38)_0%,rgba(8,24,12,0)_26%,rgba(8,24,12,0)_78%,rgba(8,24,12,.30)_100%)]" />

    <div className="relative z-[3] mx-auto h-full max-w-[1168px] px-5 sm:px-6 lg:px-0">
      <div className="inline-flex items-center gap-[9px] rounded-full border border-white/25 bg-forest-950/55 px-[18px] py-[9px] text-xs font-semibold tracking-[0.14em] text-white backdrop-blur-[6px] max-lg:mt-28 lg:absolute lg:top-[118px] lg:right-0">
        <span className="h-2 w-2 rounded-full bg-flame-500 shadow-[0_0_8px_rgba(232,64,31,.9)]" />
        NOW SELLING · KADO, ABUJA
      </div>

      <div className="mt-8 max-w-[760px] text-white lg:absolute lg:top-[196px] lg:left-0 lg:mt-0">
        <div className="mb-6 text-[11px] font-semibold tracking-[0.34em] text-gold-300 sm:text-[12.5px]">
          ZENITH HOMES AND APARTMENTS · ABUJA
        </div>
        <h1 className="text-[clamp(46px,7vw,88px)] leading-[1.02] font-light tracking-[-0.01em] [text-shadow:0_2px_34px_rgba(8,24,12,.5)]">
          Every home
          <span className="block font-bold">
            has a <span className="text-gold-300 italic">zenith.</span>
          </span>
        </h1>
        <p className="mt-6 max-w-[500px] text-[15px] leading-[1.7] text-white/95 [text-shadow:0_1px_18px_rgba(8,24,12,.55)] sm:text-[17px]">
          We build it: luxury apartments and family homes across Guzape, Idu
          and Kado, finished to the last detail and kept for generations.
        </p>
      </div>

      {/* Search pill: a single ribbon at desktop, a stacked card on small screens */}
      <Link
        to="/projects"
        className="relative z-[5] mt-10 flex flex-col rounded-3xl bg-white p-2 shadow-[0_24px_60px_rgba(8,24,12,.35)] lg:absolute lg:bottom-16 lg:left-1/2 lg:mt-0 lg:-translate-x-1/2 lg:flex-row lg:items-center lg:rounded-full"
      >
        {pillCells.map((cell, i) => (
          <span
            key={cell.label}
            className={
              "block px-5 py-3 whitespace-nowrap lg:px-7 lg:py-2 " +
              (i < pillCells.length - 1
                ? "border-b border-forest-700/10 lg:border-r lg:border-b-0"
                : "")
            }
          >
            <span className="block text-[10.5px] font-bold tracking-[0.18em] text-gold-600">
              {cell.label}
            </span>
            <span className="mt-0.5 block text-[14.5px] font-semibold text-[#17201a]">
              {cell.value}
            </span>
          </span>
        ))}
        <span className="mt-1 block rounded-full bg-gradient-to-br from-gold-300 to-gold-400 px-8 py-[15px] text-center text-[15px] font-bold whitespace-nowrap text-forest-700 lg:mt-0">
          Find my home
        </span>
      </Link>
    </div>

    {/* Sunrise curve into the next section */}
    <div className="absolute -right-[30%] -bottom-24 -left-[30%] z-[2] h-[200px] rounded-t-[50%] bg-white shadow-[0_-16px_40px_rgba(233,169,29,.22)] max-lg:hidden" />
  </section>
);

export default HeroSection;
