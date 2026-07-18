import type { ComponentType, SVGProps } from "react";
import { Instagram } from "lucide-react";
import { cn } from "@/lib/utils";
import { SOCIAL_LINKS, type SocialLink } from "@/data/site-data";

// lucide has no X logo, so it ships as a tiny inline glyph.
const XIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M18.9 2H22l-6.6 7.6L23.2 22h-6.1l-4.8-6.3L6.8 22H3.6l7.1-8.1L1.6 2h6.3l4.3 5.7L18.9 2Zm-1.1 18h1.7L7 3.9H5.2L17.8 20Z" />
  </svg>
);

const ICONS: Record<SocialLink["id"], ComponentType<SVGProps<SVGSVGElement>>> =
  {
    instagram: Instagram,
    x: XIcon,
  };

interface SocialLinksProps {
  className?: string;
}

const SocialLinks = ({ className }: SocialLinksProps) => (
  <div className={cn("flex gap-3", className)}>
    {SOCIAL_LINKS.map((social) => {
      const Icon = ICONS[social.id];
      return (
        <a
          key={social.id}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Zenith Homes on ${social.label}`}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-sage-200/25 text-sage-200 transition-colors hover:border-gold-300 hover:bg-gold-300 hover:text-forest-900"
        >
          <Icon className="size-[18px]" />
        </a>
      );
    })}
  </div>
);

export default SocialLinks;
