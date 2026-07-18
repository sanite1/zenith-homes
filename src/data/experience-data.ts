export interface TimelineStop {
  id: string;
  time: string;
  title: string;
  body: string;
  side: "left" | "right";
  highlight: boolean;
  marker: "rising" | "morning" | "noon" | "golden" | "night";
}

export const TIMELINE_STOPS: TimelineStop[] = [
  {
    id: "first-light",
    time: "06:12 · FIRST LIGHT",
    title: "Sunrise through panoramic glass",
    body: "Every plan is drawn around light. Morning arrives across open-plan living. No switch touched.",
    side: "left",
    highlight: false,
    marker: "rising",
  },
  {
    id: "morning",
    time: "09:00 · MORNING",
    title: "Streets that mind themselves",
    body: "Gated entry, greeted by name. Kids walk to the playground; the estate team has already done its rounds.",
    side: "right",
    highlight: false,
    marker: "morning",
  },
  {
    id: "high-noon",
    time: "12:00 · HIGH NOON",
    title: "The home runs itself",
    body: "Smart-home control for lights, cooling and security. Energy-efficient systems doing quiet work: comfort without the bill shock.",
    side: "left",
    highlight: true,
    marker: "noon",
  },
  {
    id: "golden-hour",
    time: "17:45 · GOLDEN HOUR",
    title: "Community, not just an address",
    body: "Estate events, workshops and neighbourly gatherings on tree-lined boulevards. Friendships that outlast fences.",
    side: "right",
    highlight: false,
    marker: "golden",
  },
  {
    id: "nightfall",
    time: "22:00 · NIGHTFALL",
    title: "Rest, watched over",
    body: "24/7 security and a maintenance line that answers. If anything hums, drips or flickers, we come to you.",
    side: "left",
    highlight: false,
    marker: "night",
  },
];
