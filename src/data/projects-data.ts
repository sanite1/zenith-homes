export interface ProjectChapter {
  id: "guzape" | "kado" | "idu";
  chapter: string;
  anchorLabel: string;
  sunLabel: string;
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  badge: string;
  glance: {
    heading: string;
    blurb: string;
    ctaLabel: string;
  };
}

export const PROJECT_CHAPTERS: ProjectChapter[] = [
  {
    id: "guzape",
    chapter: "CHAPTER 01 · GUZAPE",
    anchorLabel: "01 · GUZAPE · DELIVERED",
    sunLabel: "SUN AT 100%",
    name: "Zenith Terraces",
    tagline: "Three floors of light, delivered and lived in.",
    description:
      "Our first light: contemporary terraces in Guzape with double-volume living, panoramic openings and finishes that survive the walkthrough test. Handed over in 2025, every key collected, every family home.",
    tags: ["4-bed terraces", "3 floors", "Balconies + BQ", "Gated street"],
    badge: "SUN RISEN · DELIVERED 2025",
    glance: {
      heading: "01 · GUZAPE",
      blurb: "4-bed terraces · delivered 2025 · fully occupied",
      ctaLabel: "JOIN THE WAITLIST →",
    },
  },
  {
    id: "kado",
    chapter: "CHAPTER 02 · KADO",
    anchorLabel: "02 · KADO · NOW SELLING",
    sunLabel: "HIGH NOON",
    name: "Kado Homes",
    tagline: "Refined city apartments at the sun's height.",
    description:
      "One to three bedroom apartments with designer kitchens, marble-calm bathrooms and smart-home control as standard. Open-plan living drawn around Abuja light. Selling now, finishing soon.",
    tags: ["1–3 bedrooms", "Smart-home", "Designer kitchens", "Instalment plans"],
    badge: "NOW SELLING",
    glance: {
      heading: "02 · KADO",
      blurb: "1–3 bed apartments · now selling · instalment plans",
      ctaLabel: "BOOK A VIEWING →",
    },
  },
  {
    id: "idu",
    chapter: "CHAPTER 03 · IDU",
    anchorLabel: "03 · IDU · RISING",
    sunLabel: "ON THE HORIZON",
    name: "Idu Estate",
    tagline: "Family homes rising with the morning.",
    description:
      "A family-first community taking shape in Idu: duplexes with gardens, tree-lined streets, playgrounds and a community heart. Early registrants choose plots and finishes first.",
    tags: ["Detached duplexes", "Private gardens", "Playgrounds", "Carports"],
    badge: "ON THE HORIZON · RISING",
    glance: {
      heading: "03 · IDU",
      blurb: "Family duplexes · rising · early-bird plot priority",
      ctaLabel: "REGISTER INTEREST →",
    },
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
