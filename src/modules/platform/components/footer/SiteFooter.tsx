import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import Logo from "@/components/shared/Logo";
import SocialLinks from "@/components/shared/SocialLinks";
import { FOOTER_EXPLORE_LINKS, SITE_CONTACT } from "@/data/site-data";

const contactLines = [
  { icon: Phone, text: SITE_CONTACT.phones.join(" · ") },
  { icon: Mail, text: SITE_CONTACT.emails[0] },
  { icon: MapPin, text: "No 2 Ubiaja Crescent, Garki, Abuja" },
  { icon: Clock, text: SITE_CONTACT.hours[0] },
];

const SiteFooter = () => (
  <footer className="relative overflow-hidden bg-forest-900 px-5 pb-7 sm:px-10 lg:px-14">
    {/* The sun setting into the footer */}
    <div className="absolute top-0 left-1/2 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_40%_35%,#ffd75e,#e9a91d)] shadow-[0_0_80px_rgba(233,169,29,.55)]" />
    <div className="pointer-events-none absolute -bottom-40 -left-24 h-[340px] w-[340px] rounded-full border border-gold-300/10" />
    <div className="pointer-events-none absolute -right-16 -bottom-52 h-[420px] w-[420px] rounded-full border border-gold-300/10" />

    <div className="relative mx-auto max-w-[1168px]">
      {/* Statement + CTA */}
      <div className="flex flex-col gap-8 border-b border-sage-200/12 pt-[110px] pb-12 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="mb-4 text-[11px] font-bold tracking-[0.3em] text-gold-300">
            ZENITH HOMES AND APARTMENTS
          </div>
          <p className="max-w-[560px] text-[clamp(24px,3.5vw,36px)] leading-[1.25] font-semibold text-[#f6ecd2]">
            Peak of excellence,{" "}
            <span className="text-gold-300 italic">kept for generations.</span>
          </p>
        </div>
        <Link
          to="/contact"
          className="w-fit rounded-full bg-gradient-to-br from-gold-300 to-gold-400 px-8 py-4 text-[14.5px] font-bold whitespace-nowrap text-forest-900 transition-shadow hover:shadow-[0_10px_30px_rgba(233,169,29,.35)]"
        >
          Book a Visit →
        </Link>
      </div>

      {/* Brand · Explore · Contact */}
      <div className="grid grid-cols-1 gap-11 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1.2fr] lg:gap-14">
        <div>
          <Logo variant="dark" className="mb-5" />
          <p className="max-w-[340px] text-[13.5px] leading-[1.9] text-sage-500">
            Luxurious, sustainable, people-centered housing in Abuja, where
            every resident finds belonging, beauty and peace of mind.
          </p>
          <SocialLinks className="mt-6" />
        </div>
        <nav aria-label="Footer">
          <div className="mb-5 text-[11px] font-bold tracking-[0.26em] text-gold-300">
            EXPLORE
          </div>
          <div className="flex flex-col gap-3 text-[14px]">
            {FOOTER_EXPLORE_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="w-fit text-sage-200 transition-[color,transform] duration-200 hover:translate-x-1 hover:text-gold-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
        <div>
          <div className="mb-5 text-[11px] font-bold tracking-[0.26em] text-gold-300">
            CONTACT
          </div>
          <div className="flex flex-col gap-3.5 text-[13.5px] text-sage-200">
            {contactLines.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/[.06] text-gold-300">
                  <Icon className="size-3.5" />
                </span>
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col items-center gap-2.5 border-t border-sage-200/12 pt-6 text-xs text-[#5f7a63] sm:flex-row sm:justify-between">
        <span>
          © 2026 Zenith Homes and Apartments Ltd · {SITE_CONTACT.rc}
        </span>
        <span>From first light to the zenith ✦</span>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
