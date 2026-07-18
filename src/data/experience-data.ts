// The Zenith Experience, as the company profile actually describes it:
// three parts of the journey, no invented specifics.

export interface JourneyStage {
  id: string;
  index: string;
  label: string;
  title: string;
  pull: string;
  body: string;
  marker: "rising" | "noon" | "night";
}

export const JOURNEY_STAGES: JourneyStage[] = [
  {
    id: "personal-service",
    index: "01",
    label: "PERSONAL SERVICE",
    title: "Personalized Service",
    pull: "From the first spark of inspiration to move-in day and beyond.",
    body: "Our dedicated team walks with you at every step. With round-the-clock support, transparent communication and a passion for excellence, we turn the process of finding or building your home into a joyous celebration.",
    marker: "rising",
  },
  {
    id: "belonging",
    index: "02",
    label: "BELONGING",
    title: "A Community of Belonging",
    pull: "Every resident is a cherished member of our extended family.",
    body: "Events, workshops and neighbourly gatherings inspire connections and foster an atmosphere where friendships bloom and thrive.",
    marker: "noon",
  },
  {
    id: "after-sales",
    index: "03",
    label: "AFTER-SALES",
    title: "After-Sales Support",
    pull: "Your journey with us doesn't end at the doorstep.",
    body: "Our maintenance and customer care teams are always on hand, ensuring your home remains a haven of happiness and comfort.",
    marker: "night",
  },
];
