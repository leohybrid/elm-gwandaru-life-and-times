export interface AboutData {
  authorName: string;
  tagline: string;
  biography: string[];
  philosophicalPillars: {
    title: string;
    description: string;
  }[];
}

export const aboutData: AboutData = {
  authorName: "ELM GWANDARU",
  tagline: "At the Intersection of Ancient Wisdom & Cosmic Wonder",
  biography: [
    "ELM GWandaru is a digital sanctuary for those who question, wonder, and explore.",
    "A space where poetry, philosophy, astronomy, ancient civilizations, and sacred geometry meet.",
  ],
  philosophicalPillars: [
    {
      title: "Cosmic Perspective",
      description: "Remembering our smallness beneath ten billion stars.",
    },
    {
      title: "Sacred Geometry",
      description: "Tracing the silent mathematical patterns of consciousness.",
    },
    {
      title: "Human Absurdity & Faith",
      description: "Examining the quiet mysteries of being alive.",
    },
  ],
};
