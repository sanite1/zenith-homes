export interface ProjectChapter {
  id: "jahi" | "guzape" | "kado" | "idu";
  chapter: string;
  anchorLabel: string;
  sunLabel: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  badge: string;
  flagship: boolean;
  glance: {
    heading: string;
    blurb: string;
    ctaLabel: string;
  };
}

export const PROJECT_CHAPTERS: ProjectChapter[] = [
  {
    id: "jahi",
    chapter: "CHAPTER 01 · JAHI",
    anchorLabel: "01 · JAHI · NOW SELLING",
    sunLabel: "DAYBREAK",
    name: "The Dream Home",
    tagline: "Four 4-bed terraces, rising with the new day.",
    description:
      "An exclusive row of four terraces now rising in Jahi, Abuja: four bedrooms each, bold modern lines, warm timber accents and light-washed facades. Buy as a shell carcass and finish it your way, or take it fully finished and simply move in.",
    tags: [
      "4 units only",
      "4-bed terraces",
      "Shell or fully finished",
      "Instalment plans",
    ],
    badge: "NOW SELLING",
    flagship: true,
    glance: {
      heading: "01 · JAHI",
      blurb: "4-bed terraces · now selling · from ₦230M",
      ctaLabel: "BOOK A VIEWING →",
    },
  },
  {
    id: "guzape",
    chapter: "CHAPTER 02 · GUZAPE",
    anchorLabel: "02 · GUZAPE · DELIVERED",
    sunLabel: "SUN AT 100%",
    name: "Zenith Terraces",
    tagline: "Three floors of light, delivered and lived in.",
    description:
      "Our first light: contemporary terraces in Guzape with double-volume living, panoramic openings and finishes that survive the walkthrough test. Handed over in 2025, every key collected, every family home.",
    tags: ["4-bed terraces", "3 floors", "Balconies + BQ", "Gated street"],
    badge: "SUN RISEN · DELIVERED 2025",
    flagship: false,
    glance: {
      heading: "02 · GUZAPE",
      blurb: "4-bed terraces · delivered 2025 · fully occupied",
      ctaLabel: "JOIN THE WAITLIST →",
    },
  },
  {
    id: "kado",
    chapter: "CHAPTER 03 · KADO",
    anchorLabel: "03 · KADO · SOLD",
    sunLabel: "HIGH NOON",
    name: "Kado Homes",
    tagline: "One fully detached duplex at the sun's height.",
    description:
      "A single fully detached 7-bedroom duplex in Kado: bold modern lines, generous living volumes and private gated grounds, with room for a large family to live fully. One home only, and it has found its family.",
    tags: ["Fully detached", "7 bedrooms", "1 unit only", "Private grounds"],
    badge: "SOLD",
    flagship: true,
    glance: {
      heading: "03 · KADO",
      blurb: "Fully detached 7-bed duplex · sold",
      ctaLabel: "SEE THE STORY →",
    },
  },
  {
    id: "idu",
    chapter: "CHAPTER 04 · IDU",
    anchorLabel: "04 · IDU · RISING",
    sunLabel: "ON THE HORIZON",
    name: "Idu Estate",
    tagline: "Family homes rising with the morning.",
    description:
      "A family-first community taking shape in Idu: duplexes with gardens, tree-lined streets, playgrounds and a community heart. Early registrants choose plots and finishes first.",
    tags: ["Detached duplexes", "Private gardens", "Playgrounds", "Carports"],
    badge: "ON THE HORIZON · RISING",
    flagship: false,
    glance: {
      heading: "04 · IDU",
      blurb: "Family duplexes · rising · early-bird plot priority",
      ctaLabel: "REGISTER INTEREST →",
    },
  },
];

export interface JahiPricingOption {
  id: string;
  label: string;
  price: string;
  note: string;
  planLines: string[];
}

export const JAHI_PRICING: JahiPricingOption[] = [
  {
    id: "carcass",
    label: "SHELL CARCASS",
    price: "₦230M",
    note: "With exterior finish",
    planLines: ["30% down payment", "Balance within 10 months"],
  },
  {
    id: "finished",
    label: "FULLY FINISHED",
    price: "₦280M",
    note: "Move-in ready, keys in hand",
    planLines: ["12-month payment plan"],
  },
];

export interface PortfolioType {
  id: string;
  icon: "apartments" | "signature" | "family";
  title: string;
  intro: string;
  features: string[];
  liveIt: { label: string; anchor: string };
  highlight: boolean;
}

// From the company profile: "Our Portfolio: Where Imagination Comes Home".
export const PORTFOLIO_TYPES: PortfolioType[] = [
  {
    id: "luxury-apartments",
    icon: "apartments",
    title: "Luxury Apartments",
    intro:
      "Every sunrise glimmers through panoramic windows, every sunset bathes your sanctuary in golden hues.",
    features: [
      "Spacious open-plan living, abundant natural light",
      "Designer kitchens, state-of-the-art appliances",
      "Elegant bathrooms, premium fixtures",
      "Private balconies, city or garden views",
      "24-hour security and concierge services",
    ],
    liveIt: {
      label: "ENQUIRE ABOUT APARTMENTS →",
      anchor: "/contact?interest=other",
    },
    highlight: false,
  },
  {
    id: "signature-homes",
    icon: "signature",
    title: "Signature Homes",
    intro:
      "Custom-crafted works of art. No detail too small, no dream too grand.",
    features: [
      "Bespoke layouts tailored to your lifestyle",
      "Luxurious master suites, spacious guest rooms",
      "Tranquil outdoor sanctuaries: gardens, pools, terraces",
      "Smart home technology for seamless living",
      "Energy-efficient systems, sustainable materials",
    ],
    liveIt: { label: "SEE IT IN KADO →", anchor: "#kado" },
    highlight: true,
  },
  {
    id: "family-living",
    icon: "family",
    title: "Family-Friendly Living",
    intro:
      "Communities designed for laughter, learning and lifelong memories.",
    features: [
      "Colorful playgrounds for growing families",
      "Tree-lined boulevards and lush green spaces",
      "Vibrant community centers and gatherings",
      "Recreational facilities and thoughtful amenities",
      "Neighbourhoods alive with color and connection",
    ],
    liveIt: { label: "LIVE IT IN IDU →", anchor: "#idu" },
    highlight: false,
  },
];

export interface BuildStep {
  number: string;
  title: string;
  body: string;
}

export const HOW_WE_BUILD_STEPS: BuildStep[] = [
  {
    number: "01",
    title: "Land & titles first",
    body: "Documented, verifiable titles before a single block is laid.",
  },
  {
    number: "02",
    title: "The best hands",
    body: "Trusted suppliers and artisans, excellence built into every corner.",
  },
  {
    number: "03",
    title: "Updates from site",
    body: "Buyers get progress photos and milestones straight from the scaffold.",
  },
  {
    number: "04",
    title: "The walkthrough test",
    body: "We hand over only what we'd live in ourselves: snag-free.",
  },
];
