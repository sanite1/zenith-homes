import { Link } from "react-router-dom";
import PageMeta from "@/components/shared/PageMeta";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-forest-800 px-6 text-center text-white">
      <PageMeta title="Page not found | Zenith Homes and Apartments" />
      <div className="pointer-events-none absolute -bottom-[90px] left-1/2 h-[140px] w-[280px] -translate-x-1/2 rounded-t-[280px] bg-[linear-gradient(#ffd75e,#e9a91d)] shadow-[0_0_100px_rgba(255,215,94,.5)]" />
      <div className="text-[12px] font-bold tracking-[0.3em] text-gold-300">
        404 · OFF THE SUN'S PATH
      </div>
      <h1 className="mt-4 text-[clamp(34px,5vw,56px)] leading-[1.1] font-light">
        This page never{" "}
        <span className="font-bold">
          reached its zenith<span className="text-gold-300">.</span>
        </span>
      </h1>
      <p className="mt-4 max-w-[420px] text-[15px] leading-[1.75] text-sage-300">
        The address you followed doesn't exist. The climb back home is one
        step.
      </p>
      <Link
        to="/"
        className="mt-9 rounded-full bg-gradient-to-br from-gold-300 to-gold-400 px-8 py-4 text-[15px] font-bold text-forest-700"
      >
        Back to first light →
      </Link>
    </main>
  );
}
