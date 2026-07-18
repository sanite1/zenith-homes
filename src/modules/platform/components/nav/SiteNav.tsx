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
    <div className="relative">
      {/* Tap anywhere outside the pill or the card to close */}
      <div
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
        className={cn(
          "fixed inset-0 bg-forest-950/25 transition-opacity duration-300 lg:hidden",
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      <div className="relative flex items-center justify-between rounded-full bg-white py-2.5 pr-2.5 pl-[22px] shadow-[0_12px_40px_rgba(8,24,12,.28)]">
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
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-forest-700 text-white transition-colors lg:hidden"
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile dropdown card: slides open under the pill, sized to its links */}
      <nav
        aria-label="Mobile"
        className={cn(
          "absolute inset-x-0 top-[calc(100%+10px)] origin-top rounded-[22px] bg-white p-2.5 shadow-[0_24px_60px_rgba(8,24,12,.3)] transition-[opacity,transform] duration-300 ease-out lg:hidden",
          menuOpen
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-3 scale-[.98] opacity-0",
        )}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.key}
            to={link.href}
            onClick={() => setMenuOpen(false)}
            className={cn(
              "flex items-center justify-between rounded-2xl px-4 py-3.5 text-[15px] transition-colors",
              link.key === active
                ? "bg-forest-700/[.06] font-semibold text-forest-700"
                : "font-medium text-ink-600 active:bg-forest-700/[.04]",
            )}
          >
            {link.label}
            {link.key === active && (
              <span className="h-2 w-2 rounded-full bg-gold-400 shadow-[0_0_8px_rgba(233,169,29,.9)]" />
            )}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default SiteNav;
