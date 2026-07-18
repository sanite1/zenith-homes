export interface SunPathCard {
  id: string;
  name: string;
  blurb: string;
  badge: string;
  badgeTone: "delivered" | "selling" | "rising";
  image: "exterior" | "living" | "idu";
  flagship: boolean;
}

export const SUN_PATH_CARDS: SunPathCard[] = [
  {
    id: "guzape",
    name: "Zenith Terraces",
    blurb: "Guzape · three floors of light, lived in since 2025",
    badge: "SUN RISEN · DELIVERED",
    badgeTone: "delivered",
    image: "exterior",
    flagship: false,
  },
  {
    id: "kado",
    name: "Kado Homes",
    blurb: "Kado · 1–3 bed luxury apartments, smart-home standard",
    badge: "HIGH NOON · NOW SELLING",
    badgeTone: "selling",
    image: "living",
    flagship: true,
  },
  {
    id: "idu",
    name: "Idu Estate",
    blurb: "Idu · family homes, gardens and playgrounds, coming up",
    badge: "ON THE HORIZON · RISING",
    badgeTone: "rising",
    image: "idu",
    flagship: false,
  },
];

export interface HomeStat {
  value: string;
  label: string;
  gold: boolean;
}

export const HOME_STATS: HomeStat[] = [
  { value: "100%", label: "Quality, no shortcuts ever", gold: false },
  { value: "0", label: "Hidden fees in any plan", gold: true },
  { value: "24/7", label: "After-sales care, long after keys", gold: false },
];

export const INSIDE_FEATURES: string[] = [
  "Spacious open-plan living, flooded with light",
  "Elegant baths with premium fixtures",
  "Private balconies over gated, green streets",
];

export const INSIDE_CALLOUTS: string[] = [
  "Designer kitchens, stone & light",
  "Smart-home control as standard",
  "Energy-efficient, eco materials",
];

export interface ExperienceCard {
  id: "morning" | "noon" | "evening";
  title: string;
  body: string;
}

export const HOME_EXPERIENCE_CARDS: ExperienceCard[] = [
  {
    id: "morning",
    title: "Move-in day",
    body: "Snag-free handover after an in-person walkthrough: keys to a home that's truly finished.",
  },
  {
    id: "noon",
    title: "Life at the zenith",
    body: "Community events, workshops and neighbourly gatherings, where friendships bloom and thrive.",
  },
  {
    id: "evening",
    title: "Every evening after",
    body: "Maintenance and care teams on hand 24/7, keeping your home a haven year after year.",
  },
];
