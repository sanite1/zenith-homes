export interface Pillar {
  numeral: string;
  title: string;
  body: string;
  motif: "rising" | "morning" | "noon" | "setting";
}

export const PILLARS: Pillar[] = [
  {
    numeral: "I",
    title: "Architectural Brilliance",
    body: "Every property is envisioned by leading architects: masterpieces designed to inspire, not just shelter.",
    motif: "rising",
  },
  {
    numeral: "II",
    title: "Uncompromising Quality",
    body: "Partnerships with the best suppliers and artisans ensure excellence is built into every corner.",
    motif: "morning",
  },
  {
    numeral: "III",
    title: "Customer-Centric Philosophy",
    body: "We listen, anticipate and exceed. Every client is a collaborator in creating their ideal home.",
    motif: "noon",
  },
  {
    numeral: "IV",
    title: "Sustainable Living",
    body: "Green building woven into every project: energy-efficient appliances, eco-friendly materials, a lighter footprint.",
    motif: "setting",
  },
];

export const ACHIEVEMENTS: string[] = [
  "Guzape terraces delivered and occupied, with applause from first clients",
  "Recognition for consistent satisfaction and honest timelines",
  "Laying groundwork for communities that will inspire generations",
];

export interface AboutStat {
  value: string;
  label: string;
  gold: boolean;
}

export const ABOUT_STATS: AboutStat[] = [
  { value: "03", label: "Districts in Abuja", gold: false },
  { value: "2025", label: "First keys handed over", gold: true },
  { value: "24/7", label: "After-sales care", gold: false },
];
