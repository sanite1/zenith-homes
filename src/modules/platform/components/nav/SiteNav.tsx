import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/shared/Logo";
import { NAV_LINKS, SITE_CONTACT } from "@/data/site-data";

const activeKeyFor = (pathname: string): string => {
  if (pathname === "/") return "home";
  const match = NAV_LINKS.find(
    (l) => l.href !== "/" && pathname.startsWith(l.href),
  );
  return match?.key ?? "";
};

const SiteNav = () => {
  const { pathname } = useLocation();
  const active = activeKeyFor(pathname);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <div className="flex items-center justify-between rounded-full bg-white/[.97] py-2.5 pr-2.5 pl-[22px] shadow-[0_12px_40px_rgba(8,24,12,.28)]">
        <Logo />

        {/* Desktop links */}
        <nav className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.key}
              to={link.href}
              className={cn(
                "relative text-sm transition-colors hover:text-gold-600",
                link.key === active
                  ? "font-semibold text-forest-700"
                  : "font-medium text-[#454b44]",
              )}
            >
              {link.label}
              <span
                className={cn(
                  "absolute -bottom-[9px] left-1/2 h-[7px] w-[7px] -translate-x-1/2 rounded-full bg-gold-400 shadow-[0_0_8px_rgba(233,169,29,.9)] transition-opacity",
                  link.key === active ? "opacity-100" : "opacity-0",
                )}
              />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <span className="text-[13px] text-[#6c7168]">
            {SITE_CONTACT.phones[0]}
          </span>
          <Link
            to="/contact"
            className="rounded-full bg-forest-700 px-6 py-3 text-[13.5px] font-semibold text-white transition-colors hover:bg-forest-600"
          >
            Book a Visit
          </Link>
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-forest-700 text-white lg:hidden"
        >
          <Menu className="size-5" />
        </button>
      </div>

      {/* Mobile full-screen sheet: the site's dark green, sun dot marking where you are */}
      {menuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-forest-800 lg:hidden">
          <div className="pointer-events-none absolute -top-16 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_40%_35%,#ffd75e,#e9a91d)] opacity-80 shadow-[0_0_100px_rgba(255,215,94,.5)]" />
          <div className="flex items-center justify-between px-5 pt-7">
            <Logo variant="dark" link="/" />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white"
            >
              <X className="size-5" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col justify-center gap-2 px-8">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.key}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "flex items-center gap-4 py-3 text-[28px] font-light text-white",
                  link.key === active && "font-semibold",
                )}
              >
                <span className="text-[11px] font-bold tracking-[0.2em] text-gold-600">
                  0{i + 1}
                </span>
                {link.label}
                {link.key === active && (
                  <span className="h-2 w-2 rounded-full bg-gold-300 shadow-[0_0_10px_rgba(255,215,94,.9)]" />
                )}
              </Link>
            ))}
          </nav>
          <div className="px-8 pb-10">
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="block rounded-full bg-gradient-to-br from-gold-300 to-gold-400 py-4 text-center text-[15px] font-bold text-forest-700"
            >
              Book a Visit
            </Link>
            <div className="mt-5 text-center text-[13px] text-sage-500">
              {SITE_CONTACT.phones[0]} · {SITE_CONTACT.phones[1]}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SiteNav;
