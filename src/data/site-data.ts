export interface NavLink {
  key: string;
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { key: "home", label: "Home", href: "/" },
  { key: "projects", label: "Projects", href: "/projects" },
  { key: "experience", label: "The Experience", href: "/experience" },
  { key: "about", label: "About", href: "/about" },
  { key: "contact", label: "Contact", href: "/contact" },
];

export interface SiteContact {
  phones: string[];
  emails: string[];
  address: string[];
  hours: string[];
  rc: string;
}

export const SITE_CONTACT: SiteContact = {
  phones: ["0814 662 8362", "0816 324 3281"],
  emails: ["Info@zenithhomesafrica.com", "Sales@zenithhomesafrica.com"],
  address: ["No 3 Hamza Sakwa Cl,", "Guzape, Abuja, Nigeria"],
  hours: ["Mon to Sat · 9am to 5pm", "Site visits by appointment"],
  rc: "RC 8642300",
};

export interface SocialLink {
  id: "instagram" | "x";
  label: string;
  href: string;
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/zenith_homes.and.apartments",
  },
  { id: "x", label: "X", href: "https://x.com/Zenith_Homes025" },
];

export interface FooterLink {
  label: string;
  href: string;
}

export const FOOTER_EXPLORE_LINKS: FooterLink[] = [
  { label: "Projects", href: "/projects" },
  { label: "The Experience", href: "/experience" },
  { label: "About Zenith", href: "/about" },
  { label: "Contact", href: "/contact" },
];
