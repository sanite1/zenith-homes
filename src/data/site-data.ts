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
  website: string;
  hours: string[];
  socialHandles: string[];
  rc: string;
}

export const SITE_CONTACT: SiteContact = {
  phones: ["0814 662 8362", "0816 324 3281"],
  emails: ["Info@zenithhomesltd.com", "Sales@zenithhomesltd.com"],
  address: ["No 2 Ubiaja Crescent,", "Garki, Abuja, Nigeria"],
  website: "www.zenithhomesltd.com",
  hours: ["Mon to Sat · 9am to 5pm", "Site visits by appointment"],
  socialHandles: ["@Zenith_homes.and.apartments", "@Zenith_Homes025"],
  rc: "RC 8642300",
};

export interface SocialBadge {
  id: string;
  label: string;
}

export const SOCIAL_BADGES: SocialBadge[] = [
  { id: "instagram", label: "IG" },
  { id: "x", label: "X" },
  { id: "facebook", label: "FB" },
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
