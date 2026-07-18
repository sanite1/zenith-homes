import type { JourneyStage } from "@/data/experience-data";

// Sun positions for the three parts of the journey.
const StageSun = ({ marker }: { marker: JourneyStage["marker"] }) => {
  switch (marker) {
    case "rising":
      return (
        <span className="h-2 w-4 rounded-t-full bg-gradient-to-b from-gold-300 to-gold-400" />
      );
    case "noon":
      return (
        <span className="h-4 w-4 rounded-full bg-[radial-gradient(circle_at_38%_32%,#ffd75e,#e9a91d)] shadow-[0_0_12px_rgba(255,215,94,.9)]" />
      );
    case "night":
      return (
        <span className="h-3 w-3 rounded-full bg-forest-700 shadow-[inset_-3px_0_0_0_#fdf4dd]" />
      );
  }
};

export default StageSun;
