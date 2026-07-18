import { Link } from "react-router-dom";
import Logo from "@/components/shared/Logo";
import {
  FOOTER_EXPLORE_LINKS,
  SITE_CONTACT,
  SOCIAL_BADGES,
} from "@/data/site-data";

const SiteFooter = () => (
  <footer className="relative overflow-hidden bg-forest-900 px-5 pb-6 sm:px-10 lg:px-14">
    {/* The sun setting into the footer */}
    <div className="absolute top-0 left-1/2 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_40%_35%,#ffd75e,#e9a91d)] shadow-[0_0_80px_rgba(233,169,29,.55)]" />

    <div className="pt-[110px] pb-10 text-center sm:pb-[54px]">
      <p className="text-[22px] font-semibold text-[#f6ecd2] sm:text-[30px]">
        Peak of excellence,{" "}
        <span className="text-gold-300 italic">kept for generations.</span>
      </p>
    </div>

    <div className="mx-auto grid max-w-[1168px] grid-cols-1 gap-10 border-b border-sage-200/[.14] pb-11 text-sage-200 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-12">
      <div>
        <Logo variant="dark" className="mb-4" />
        <p className="text-[13px] leading-[1.85] text-sage-500">
          Luxurious, sustainable, people-centered housing in Abuja, where every
          resident finds belonging, beauty and peace of mind.
        </p>
      </div>
      <div className="text-[13.5px] leading-[2.4]">
        <div className="mb-2.5 text-[11px] font-bold tracking-[0.26em] text-gold-300">
          EXPLORE
        </div>
        {FOOTER_EXPLORE_LINKS.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className="block w-fit text-sage-200 transition-colors hover:text-gold-300"
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="text-[13.5px] leading-[2.4]">
        <div className="mb-2.5 text-[11px] font-bold tracking-[0.26em] text-gold-300">
          CONTACT
        </div>
        No 2 Ubiaja Crescent, Garki, Abuja
        <br />
        {SITE_CONTACT.emails[0]}
        <br />
        {SITE_CONTACT.website}
        <br />
        {SITE_CONTACT.phones.join(" · ")}
      </div>
      <div>
        <div className="mb-3.5 text-[11px] font-bold tracking-[0.26em] text-gold-300">
          FOLLOW THE CLIMB
        </div>
        <div className="mb-3.5 flex gap-3">
          {SOCIAL_BADGES.map((badge) => (
            <span
              key={badge.id}
              className="flex h-[38px] w-[38px] items-center justify-center rounded-full border border-sage-200/30 text-[12.5px] font-bold text-gold-300"
            >
              {badge.label}
            </span>
          ))}
        </div>
        <div className="text-xs leading-8 text-sage-500">
          {SITE_CONTACT.socialHandles[0]}
          <br />
          {SITE_CONTACT.socialHandles[1]}
        </div>
      </div>
    </div>

    <div className="mx-auto flex max-w-[1168px] flex-col items-center gap-2 pt-5 text-xs text-[#5f7a63] sm:flex-row sm:justify-between">
      <span>© 2026 Zenith Homes and Apartments Ltd · {SITE_CONTACT.rc}</span>
      <span>From first light to the zenith ✦</span>
    </div>
  </footer>
);

export default SiteFooter;
